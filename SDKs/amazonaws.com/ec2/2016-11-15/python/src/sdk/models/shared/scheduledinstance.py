from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class ScheduledInstance:
    r"""ScheduledInstance
    Describes a Scheduled Instance.
    """
    
    availability_zone: Optional[str] = field(default=None)
    create_date: Optional[datetime] = field(default=None)
    hourly_price: Optional[str] = field(default=None)
    instance_count: Optional[int] = field(default=None)
    instance_type: Optional[str] = field(default=None)
    network_platform: Optional[str] = field(default=None)
    next_slot_start_time: Optional[datetime] = field(default=None)
    platform: Optional[str] = field(default=None)
    previous_slot_end_time: Optional[datetime] = field(default=None)
    recurrence: Optional[ScheduledInstanceRecurrence] = field(default=None)
    scheduled_instance_id: Optional[str] = field(default=None)
    slot_duration_in_hours: Optional[int] = field(default=None)
    term_end_date: Optional[datetime] = field(default=None)
    term_start_date: Optional[datetime] = field(default=None)
    total_scheduled_instance_hours: Optional[int] = field(default=None)
    
