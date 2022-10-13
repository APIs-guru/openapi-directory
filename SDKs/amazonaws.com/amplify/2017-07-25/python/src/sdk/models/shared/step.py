from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jobstatus_enum


@dataclass_json
@dataclass
class Step:
    artifacts_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactsUrl' }})
    context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logUrl' }})
    screenshots: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenshots' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: jobstatus_enum.JobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    step_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepName' }})
    test_artifacts_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testArtifactsUrl' }})
    test_config_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testConfigUrl' }})
    
