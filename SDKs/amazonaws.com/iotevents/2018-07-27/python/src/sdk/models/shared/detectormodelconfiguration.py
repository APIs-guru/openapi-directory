from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import evaluationmethod_enum
from . import detectormodelversionstatus_enum


@dataclass_json
@dataclass
class DetectorModelConfiguration:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detector_model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelArn' }})
    detector_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelDescription' }})
    detector_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelName' }})
    detector_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelVersion' }})
    evaluation_method: Optional[evaluationmethod_enum.EvaluationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationMethod' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    status: Optional[detectormodelversionstatus_enum.DetectorModelVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
