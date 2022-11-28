from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class VolumeStatusEvent:
    r"""VolumeStatusEvent
    Describes a volume status event.
    """
    
    description: Optional[str] = field(default=None)
    event_id: Optional[str] = field(default=None)
    event_type: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    not_after: Optional[datetime] = field(default=None)
    not_before: Optional[datetime] = field(default=None)
    
