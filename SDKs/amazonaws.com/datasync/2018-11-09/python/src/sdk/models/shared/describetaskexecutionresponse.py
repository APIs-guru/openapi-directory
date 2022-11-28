from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTaskExecutionResponse:
    r"""DescribeTaskExecutionResponse
    DescribeTaskExecutionResponse
    """
    
    bytes_transferred: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BytesTransferred') }})
    bytes_written: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BytesWritten') }})
    estimated_bytes_to_transfer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EstimatedBytesToTransfer') }})
    estimated_files_to_transfer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EstimatedFilesToTransfer') }})
    excludes: Optional[List[FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Excludes') }})
    files_transferred: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilesTransferred') }})
    includes: Optional[List[FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Includes') }})
    options: Optional[Options] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    result: Optional[TaskExecutionResultDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[TaskExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    task_execution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskExecutionArn') }})
    
