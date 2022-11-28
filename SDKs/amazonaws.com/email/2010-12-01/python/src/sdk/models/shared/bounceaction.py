from dataclasses import dataclass, field
from typing import Optional


@dataclass
class BounceAction:
    r"""BounceAction
    <p>When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about sending a bounce message in response to a received email, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    message: str = field()
    sender: str = field()
    smtp_reply_code: str = field()
    status_code: Optional[str] = field(default=None)
    topic_arn: Optional[str] = field(default=None)
    
