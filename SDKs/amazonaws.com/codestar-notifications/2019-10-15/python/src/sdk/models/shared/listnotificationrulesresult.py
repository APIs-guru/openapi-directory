from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notificationrulesummary


@dataclass_json
@dataclass
class ListNotificationRulesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    notification_rules: Optional[List[notificationrulesummary.NotificationRuleSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationRules' }})
    
