from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class ScheduledInstanceAvailability:
    r"""ScheduledInstanceAvailability
    Describes a schedule that is available for your Scheduled Instances.
    """
    
    availability_zone: Optional[str] = field(default=None)
    available_instance_count: Optional[int] = field(default=None)
    first_slot_start_time: Optional[datetime] = field(default=None)
    hourly_price: Optional[str] = field(default=None)
    instance_type: Optional[str] = field(default=None)
    max_term_duration_in_days: Optional[int] = field(default=None)
    min_term_duration_in_days: Optional[int] = field(default=None)
    network_platform: Optional[str] = field(default=None)
    platform: Optional[str] = field(default=None)
    purchase_token: Optional[str] = field(default=None)
    recurrence: Optional[ScheduledInstanceRecurrence] = field(default=None)
    slot_duration_in_hours: Optional[int] = field(default=None)
    total_scheduled_instance_hours: Optional[int] = field(default=None)
    
