from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class Event:
    r"""Event
    Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node.
    """
    
    date_: Optional[datetime] = field(default=None)
    message: Optional[str] = field(default=None)
    source_identifier: Optional[str] = field(default=None)
    source_type: Optional[SourceTypeEnum] = field(default=None)
    
