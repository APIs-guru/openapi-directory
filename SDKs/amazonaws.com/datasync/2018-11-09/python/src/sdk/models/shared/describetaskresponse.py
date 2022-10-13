from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filterrule
from . import filterrule
from . import options
from . import taskschedule
from . import taskstatus_enum


@dataclass_json
@dataclass
class DescribeTaskResponse:
    cloud_watch_log_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogGroupArn' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_task_execution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentTaskExecutionArn' }})
    destination_location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationLocationArn' }})
    destination_network_interface_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationNetworkInterfaceArns' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorDetail' }})
    excludes: Optional[List[filterrule.FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Excludes' }})
    includes: Optional[List[filterrule.FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Includes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    options: Optional[options.Options] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Options' }})
    schedule: Optional[taskschedule.TaskSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    source_location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceLocationArn' }})
    source_network_interface_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceNetworkInterfaceArns' }})
    status: Optional[taskstatus_enum.TaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskArn' }})
    
