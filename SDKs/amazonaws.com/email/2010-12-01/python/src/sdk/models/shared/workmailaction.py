from dataclasses import dataclass, field
from typing import Optional


@dataclass
class WorkmailAction:
    r"""WorkmailAction
    <p>When included in a receipt rule, this action calls Amazon WorkMail and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS). You will typically not use this action directly because Amazon WorkMail adds the rule automatically during its setup procedure.</p> <p>For information using a receipt rule to call Amazon WorkMail, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-workmail.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    organization_arn: str = field()
    topic_arn: Optional[str] = field(default=None)
    
