from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SendDataPoint:
    r"""SendDataPoint
    Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity. 
    """
    
    bounces: Optional[int] = field(default=None)
    complaints: Optional[int] = field(default=None)
    delivery_attempts: Optional[int] = field(default=None)
    rejects: Optional[int] = field(default=None)
    timestamp: Optional[datetime] = field(default=None)
    
