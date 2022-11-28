from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ReceiptRuleSetMetadata:
    r"""ReceiptRuleSetMetadata
    <p>Information about a receipt rule set.</p> <p>A receipt rule set is a collection of rules that specify what Amazon SES should do with mail it receives on behalf of your account's verified domains.</p> <p>For information about setting up receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    created_timestamp: Optional[datetime] = field(default=None)
    name: Optional[str] = field(default=None)
    
