from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filterrule
from . import filterrule
from . import options
from . import taskexecutionresultdetail
from . import taskexecutionstatus_enum


@dataclass_json
@dataclass
class DescribeTaskExecutionResponse:
    bytes_transferred: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BytesTransferred' }})
    bytes_written: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BytesWritten' }})
    estimated_bytes_to_transfer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimatedBytesToTransfer' }})
    estimated_files_to_transfer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimatedFilesToTransfer' }})
    excludes: Optional[List[filterrule.FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Excludes' }})
    files_transferred: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilesTransferred' }})
    includes: Optional[List[filterrule.FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Includes' }})
    options: Optional[options.Options] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Options' }})
    result: Optional[taskexecutionresultdetail.TaskExecutionResultDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Result' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[taskexecutionstatus_enum.TaskExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    task_execution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskExecutionArn' }})
    
