from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ReceiptRule:
    r"""ReceiptRule
    <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    name: str = field()
    actions: Optional[List[ReceiptAction]] = field(default=None)
    enabled: Optional[bool] = field(default=None)
    recipients: Optional[List[str]] = field(default=None)
    scan_enabled: Optional[bool] = field(default=None)
    tls_policy: Optional[TLSPolicyEnum] = field(default=None)
    
