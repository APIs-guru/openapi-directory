from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InstanceStatusEvent:
    r"""InstanceStatusEvent
    Describes a scheduled event for an instance.
    """
    
    code: Optional[EventCodeEnum] = field(default=None)
    description: Optional[str] = field(default=None)
    instance_event_id: Optional[str] = field(default=None)
    not_after: Optional[datetime] = field(default=None)
    not_before: Optional[datetime] = field(default=None)
    not_before_deadline: Optional[datetime] = field(default=None)
    
