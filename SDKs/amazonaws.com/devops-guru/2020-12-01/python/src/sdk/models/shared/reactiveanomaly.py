from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReactiveAnomaly:
    r"""ReactiveAnomaly
    Details about a reactive anomaly. This object is returned by <code>ListAnomalies</code>.
    """
    
    anomaly_reported_time_range: Optional[AnomalyReportedTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyReportedTimeRange') }})
    anomaly_time_range: Optional[AnomalyTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyTimeRange') }})
    associated_insight_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociatedInsightId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    resource_collection: Optional[ResourceCollection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCollection') }})
    severity: Optional[AnomalySeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    source_details: Optional[AnomalySourceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDetails') }})
    status: Optional[AnomalyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
