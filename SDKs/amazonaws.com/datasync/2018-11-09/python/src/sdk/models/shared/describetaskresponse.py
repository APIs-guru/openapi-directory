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
class DescribeTaskResponse:
    r"""DescribeTaskResponse
    DescribeTaskResponse
    """
    
    cloud_watch_log_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogGroupArn') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_task_execution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentTaskExecutionArn') }})
    destination_location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationLocationArn') }})
    destination_network_interface_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationNetworkInterfaceArns') }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetail') }})
    excludes: Optional[List[FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Excludes') }})
    includes: Optional[List[FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Includes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    options: Optional[Options] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    schedule: Optional[TaskSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    source_location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceLocationArn') }})
    source_network_interface_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceNetworkInterfaceArns') }})
    status: Optional[TaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskArn') }})
    
