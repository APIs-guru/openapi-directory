from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetMinuteUsageResponse:
    estimated_minutes_remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedMinutesRemaining' }})
    is_reserved_minutes_customer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isReservedMinutesCustomer' }})
    total_reserved_minute_allocation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalReservedMinuteAllocation' }})
    total_scheduled_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalScheduledMinutes' }})
    upcoming_minutes_scheduled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upcomingMinutesScheduled' }})
    
