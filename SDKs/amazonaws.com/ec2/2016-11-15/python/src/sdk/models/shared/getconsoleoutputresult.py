from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetConsoleOutputResult:
    instance_id: Optional[str] = field(default=None)
    output: Optional[str] = field(default=None)
    timestamp: Optional[datetime] = field(default=None)
    
