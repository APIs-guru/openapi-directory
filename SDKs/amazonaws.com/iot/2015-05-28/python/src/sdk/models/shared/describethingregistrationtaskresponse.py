from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class DescribeThingRegistrationTaskResponse:
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCount' }})
    input_file_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputFileBucket' }})
    input_file_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputFileKey' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    percentage_progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentageProgress' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    success_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successCount' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    template_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateBody' }})
    
