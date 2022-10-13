from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import insighttimerange
from . import predictiontimerange
from . import resourcecollection
from . import servicecollection
from . import insightseverity_enum
from . import insightstatus_enum


@dataclass_json
@dataclass
class ProactiveInsightSummary:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    insight_time_range: Optional[insighttimerange.InsightTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightTimeRange' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    prediction_time_range: Optional[predictiontimerange.PredictionTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictionTimeRange' }})
    resource_collection: Optional[resourcecollection.ResourceCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCollection' }})
    service_collection: Optional[servicecollection.ServiceCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCollection' }})
    severity: Optional[insightseverity_enum.InsightSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    status: Optional[insightstatus_enum.InsightStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
