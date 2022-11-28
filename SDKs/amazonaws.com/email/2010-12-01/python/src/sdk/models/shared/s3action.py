from dataclasses import dataclass, field
from typing import Optional


@dataclass
class S3Action:
    r"""S3Action
    <p>When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html\">Amazon SES Developer Guide</a>.</p> <note> <p>When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 30 MB. Emails larger than that will bounce.</p> </note> <p>For information about specifying Amazon S3 actions in receipt rules, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-s3.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    bucket_name: str = field()
    kms_key_arn: Optional[str] = field(default=None)
    object_key_prefix: Optional[str] = field(default=None)
    topic_arn: Optional[str] = field(default=None)
    
