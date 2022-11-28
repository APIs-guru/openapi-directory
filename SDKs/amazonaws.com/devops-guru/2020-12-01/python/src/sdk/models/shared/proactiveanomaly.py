from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProactiveAnomaly:
    r"""ProactiveAnomaly
    Information about an anomaly. This object is returned by <code>ListAnomalies</code>.
    """
    
    anomaly_reported_time_range: Optional[AnomalyReportedTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyReportedTimeRange') }})
    anomaly_time_range: Optional[AnomalyTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyTimeRange') }})
    associated_insight_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociatedInsightId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    prediction_time_range: Optional[PredictionTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictionTimeRange') }})
    resource_collection: Optional[ResourceCollection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCollection') }})
    severity: Optional[AnomalySeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    source_details: Optional[AnomalySourceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDetails') }})
    status: Optional[AnomalyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
