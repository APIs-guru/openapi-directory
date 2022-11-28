from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ManagedAction:
    r"""ManagedAction
    The record of an upcoming or in-progress managed action.
    """
    
    action_description: Optional[str] = field(default=None)
    action_id: Optional[str] = field(default=None)
    action_type: Optional[ActionTypeEnum] = field(default=None)
    status: Optional[ActionStatusEnum] = field(default=None)
    window_start_time: Optional[datetime] = field(default=None)
    
