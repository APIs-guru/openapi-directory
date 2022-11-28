from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ReceiptAction:
    r"""ReceiptAction
    <p>An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.</p> <p>For information about setting up receipt rules, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    add_header_action: Optional[AddHeaderAction] = field(default=None)
    bounce_action: Optional[BounceAction] = field(default=None)
    lambda_action: Optional[LambdaAction] = field(default=None)
    s3_action: Optional[S3Action] = field(default=None)
    sns_action: Optional[SnsAction] = field(default=None)
    stop_action: Optional[StopAction] = field(default=None)
    workmail_action: Optional[WorkmailAction] = field(default=None)
    
