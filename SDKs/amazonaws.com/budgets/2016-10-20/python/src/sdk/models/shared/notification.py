from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import comparisonoperator_enum
from . import notificationstate_enum
from . import notificationtype_enum
from . import thresholdtype_enum


@dataclass_json
@dataclass
class Notification:
    comparison_operator: comparisonoperator_enum.ComparisonOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComparisonOperator' }})
    notification_state: Optional[notificationstate_enum.NotificationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationState' }})
    notification_type: notificationtype_enum.NotificationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationType' }})
    threshold: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Threshold' }})
    threshold_type: Optional[thresholdtype_enum.ThresholdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThresholdType' }})
    
