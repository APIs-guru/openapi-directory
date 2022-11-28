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
class DescribeThingRegistrationTaskResponse:
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCount') }})
    input_file_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFileBucket') }})
    input_file_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFileKey') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    percentage_progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentageProgress') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    status: Optional[StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    success_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successCount') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    template_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBody') }})
    
