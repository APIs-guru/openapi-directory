from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dayofweek_enum
from . import auditfrequency_enum


@dataclass_json
@dataclass
class DescribeScheduledAuditResponse:
    day_of_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfMonth' }})
    day_of_week: Optional[dayofweek_enum.DayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfWeek' }})
    frequency: Optional[auditfrequency_enum.AuditFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    scheduled_audit_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledAuditArn' }})
    scheduled_audit_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledAuditName' }})
    target_check_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCheckNames' }})
    
