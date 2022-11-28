from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class Activity:
    r"""Activity
    Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance.
    """
    
    activity_id: str = field()
    auto_scaling_group_name: str = field()
    cause: str = field()
    start_time: datetime = field()
    status_code: ScalingActivityStatusCodeEnum = field()
    auto_scaling_group_arn: Optional[str] = field(default=None)
    auto_scaling_group_state: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    details: Optional[str] = field(default=None)
    end_time: Optional[datetime] = field(default=None)
    progress: Optional[int] = field(default=None)
    status_message: Optional[str] = field(default=None)
    
