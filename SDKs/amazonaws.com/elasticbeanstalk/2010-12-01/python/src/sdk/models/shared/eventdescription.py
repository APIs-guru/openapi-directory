from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class EventDescription:
    r"""EventDescription
    Describes an event.
    """
    
    application_name: Optional[str] = field(default=None)
    environment_name: Optional[str] = field(default=None)
    event_date: Optional[datetime] = field(default=None)
    message: Optional[str] = field(default=None)
    platform_arn: Optional[str] = field(default=None)
    request_id: Optional[str] = field(default=None)
    severity: Optional[EventSeverityEnum] = field(default=None)
    template_name: Optional[str] = field(default=None)
    version_label: Optional[str] = field(default=None)
    
