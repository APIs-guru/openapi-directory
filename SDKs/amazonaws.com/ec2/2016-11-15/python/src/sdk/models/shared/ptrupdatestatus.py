from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PtrUpdateStatus:
    r"""PtrUpdateStatus
    The status of an updated pointer (PTR) record for an Elastic IP address.
    """
    
    reason: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
