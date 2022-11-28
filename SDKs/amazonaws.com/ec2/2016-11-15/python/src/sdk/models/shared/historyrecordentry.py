from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class HistoryRecordEntry:
    r"""HistoryRecordEntry
    Describes an event in the history of an EC2 Fleet.
    """
    
    event_information: Optional[EventInformation] = field(default=None)
    event_type: Optional[FleetEventTypeEnum] = field(default=None)
    timestamp: Optional[datetime] = field(default=None)
    
