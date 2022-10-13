from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usagereportsubscription


@dataclass_json
@dataclass
class DescribeUsageReportSubscriptionsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    usage_report_subscriptions: Optional[List[usagereportsubscription.UsageReportSubscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsageReportSubscriptions' }})
    
