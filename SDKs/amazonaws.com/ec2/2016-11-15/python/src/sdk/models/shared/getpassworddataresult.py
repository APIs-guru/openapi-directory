from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetPasswordDataResult:
    instance_id: Optional[str] = field(default=None)
    password_data: Optional[str] = field(default=None)
    timestamp: Optional[datetime] = field(default=None)
    
