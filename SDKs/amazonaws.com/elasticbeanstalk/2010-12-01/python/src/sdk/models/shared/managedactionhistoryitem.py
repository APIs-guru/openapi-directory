from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ManagedActionHistoryItem:
    r"""ManagedActionHistoryItem
    The record of a completed or failed managed action.
    """
    
    action_description: Optional[str] = field(default=None)
    action_id: Optional[str] = field(default=None)
    action_type: Optional[ActionTypeEnum] = field(default=None)
    executed_time: Optional[datetime] = field(default=None)
    failure_description: Optional[str] = field(default=None)
    failure_type: Optional[FailureTypeEnum] = field(default=None)
    finished_time: Optional[datetime] = field(default=None)
    status: Optional[ActionHistoryStatusEnum] = field(default=None)
    
