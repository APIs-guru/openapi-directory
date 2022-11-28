from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SpotInstanceStatus:
    r"""SpotInstanceStatus
    Describes the status of a Spot Instance request.
    """
    
    code: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    update_time: Optional[datetime] = field(default=None)
    
