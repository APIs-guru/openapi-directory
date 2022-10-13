from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import anomalyreportedtimerange
from . import anomalytimerange
from . import resourcecollection
from . import anomalyseverity_enum
from . import anomalysourcedetails
from . import anomalystatus_enum


@dataclass_json
@dataclass
class ReactiveAnomaly:
    anomaly_reported_time_range: Optional[anomalyreportedtimerange.AnomalyReportedTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyReportedTimeRange' }})
    anomaly_time_range: Optional[anomalytimerange.AnomalyTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyTimeRange' }})
    associated_insight_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociatedInsightId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    resource_collection: Optional[resourcecollection.ResourceCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCollection' }})
    severity: Optional[anomalyseverity_enum.AnomalySeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    source_details: Optional[anomalysourcedetails.AnomalySourceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceDetails' }})
    status: Optional[anomalystatus_enum.AnomalyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
