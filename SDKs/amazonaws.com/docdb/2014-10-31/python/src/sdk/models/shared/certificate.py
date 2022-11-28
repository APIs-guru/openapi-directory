from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class Certificate:
    r"""Certificate
    A certificate authority (CA) certificate for an account.
    """
    
    certificate_arn: Optional[str] = field(default=None)
    certificate_identifier: Optional[str] = field(default=None)
    certificate_type: Optional[str] = field(default=None)
    thumbprint: Optional[str] = field(default=None)
    valid_from: Optional[datetime] = field(default=None)
    valid_till: Optional[datetime] = field(default=None)
    
