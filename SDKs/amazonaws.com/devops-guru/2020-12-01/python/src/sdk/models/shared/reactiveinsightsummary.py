from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReactiveInsightSummary:
    r"""ReactiveInsightSummary
     Information about a reactive insight. This object is returned by <code>DescribeInsight.</code> 
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    insight_time_range: Optional[InsightTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightTimeRange') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    resource_collection: Optional[ResourceCollection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCollection') }})
    service_collection: Optional[ServiceCollection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCollection') }})
    severity: Optional[InsightSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    status: Optional[InsightStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
