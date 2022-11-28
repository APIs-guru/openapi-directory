from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ScheduledUpdateGroupAction:
    r"""ScheduledUpdateGroupAction
    Describes a scheduled scaling action.
    """
    
    auto_scaling_group_name: Optional[str] = field(default=None)
    desired_capacity: Optional[int] = field(default=None)
    end_time: Optional[datetime] = field(default=None)
    max_size: Optional[int] = field(default=None)
    min_size: Optional[int] = field(default=None)
    recurrence: Optional[str] = field(default=None)
    scheduled_action_arn: Optional[str] = field(default=None)
    scheduled_action_name: Optional[str] = field(default=None)
    start_time: Optional[datetime] = field(default=None)
    time: Optional[datetime] = field(default=None)
    time_zone: Optional[str] = field(default=None)
    
