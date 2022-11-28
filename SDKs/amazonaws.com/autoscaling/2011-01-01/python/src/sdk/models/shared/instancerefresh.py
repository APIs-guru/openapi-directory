from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InstanceRefresh:
    r"""InstanceRefresh
    Describes an instance refresh for an Auto Scaling group. 
    """
    
    auto_scaling_group_name: Optional[str] = field(default=None)
    desired_configuration: Optional[DesiredConfiguration] = field(default=None)
    end_time: Optional[datetime] = field(default=None)
    instance_refresh_id: Optional[str] = field(default=None)
    instances_to_update: Optional[int] = field(default=None)
    percentage_complete: Optional[int] = field(default=None)
    preferences: Optional[RefreshPreferences] = field(default=None)
    progress_details: Optional[InstanceRefreshProgressDetails] = field(default=None)
    start_time: Optional[datetime] = field(default=None)
    status: Optional[InstanceRefreshStatusEnum] = field(default=None)
    status_reason: Optional[str] = field(default=None)
    
