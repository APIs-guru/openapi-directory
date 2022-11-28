from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SnsChannelConfig:
    r"""SnsChannelConfig
    <p> Contains the Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see <a href=\"https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html\">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href=\"https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html\">Permissions for AWS KMS–encrypted Amazon SNS topics</a>.</p>
    """
    
    topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicArn') }})
    
