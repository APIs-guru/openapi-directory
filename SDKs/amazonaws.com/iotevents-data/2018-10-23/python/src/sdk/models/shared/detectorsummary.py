from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import detectorstatesummary


@dataclass_json
@dataclass
class DetectorSummary:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detector_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelName' }})
    detector_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelVersion' }})
    key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValue' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[detectorstatesummary.DetectorStateSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
