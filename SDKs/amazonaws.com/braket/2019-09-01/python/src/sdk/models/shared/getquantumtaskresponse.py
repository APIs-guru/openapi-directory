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
class GetQuantumTaskResponse:
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    device_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceArn') }})
    device_parameters: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceParameters') }})
    output_s3_bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputS3Bucket') }})
    output_s3_directory: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputS3Directory') }})
    quantum_task_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantumTaskArn') }})
    shots: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shots') }})
    status: QuantumTaskStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    ended_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
