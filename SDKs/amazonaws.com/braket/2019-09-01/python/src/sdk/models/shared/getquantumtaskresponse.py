from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import quantumtaskstatus_enum


@dataclass_json
@dataclass
class GetQuantumTaskResponse:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    device_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceArn' }})
    device_parameters: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceParameters' }})
    ended_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    output_s3_bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputS3Bucket' }})
    output_s3_directory: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputS3Directory' }})
    quantum_task_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantumTaskArn' }})
    shots: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shots' }})
    status: quantumtaskstatus_enum.QuantumTaskStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
