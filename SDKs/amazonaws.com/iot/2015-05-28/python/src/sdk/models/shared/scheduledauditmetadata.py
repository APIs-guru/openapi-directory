from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScheduledAuditMetadata:
    r"""ScheduledAuditMetadata
    Information about the scheduled audit.
    """
    
    day_of_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfMonth') }})
    day_of_week: Optional[DayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfWeek') }})
    frequency: Optional[AuditFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    scheduled_audit_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledAuditArn') }})
    scheduled_audit_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledAuditName') }})
    
