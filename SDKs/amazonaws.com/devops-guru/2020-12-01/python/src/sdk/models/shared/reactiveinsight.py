from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import insighttimerange
from . import resourcecollection
from . import insightseverity_enum
from . import insightstatus_enum


@dataclass_json
@dataclass
class ReactiveInsight:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    insight_time_range: Optional[insighttimerange.InsightTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightTimeRange' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    resource_collection: Optional[resourcecollection.ResourceCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCollection' }})
    severity: Optional[insightseverity_enum.InsightSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    ssm_ops_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SsmOpsItemId' }})
    status: Optional[insightstatus_enum.InsightStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
