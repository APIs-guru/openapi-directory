from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ScheduledInstanceRecurrence:
    r"""ScheduledInstanceRecurrence
    Describes the recurring schedule for a Scheduled Instance.
    """
    
    frequency: Optional[str] = field(default=None)
    interval: Optional[int] = field(default=None)
    occurrence_day_set: Optional[List[int]] = field(default=None)
    occurrence_relative_to_end: Optional[bool] = field(default=None)
    occurrence_unit: Optional[str] = field(default=None)
    
