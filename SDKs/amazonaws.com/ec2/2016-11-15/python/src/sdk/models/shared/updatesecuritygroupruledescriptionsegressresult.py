from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class UpdateSecurityGroupRuleDescriptionsEgressResult:
    return_: Optional[bool] = field(default=None)
    
