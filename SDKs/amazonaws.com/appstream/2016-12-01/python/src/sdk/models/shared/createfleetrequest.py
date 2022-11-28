from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFleetRequest:
    compute_capacity: ComputeCapacity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeCapacity') }})
    instance_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    disconnect_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisconnectTimeoutInSeconds') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    domain_join_info: Optional[DomainJoinInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainJoinInfo') }})
    enable_default_internet_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableDefaultInternetAccess') }})
    fleet_type: Optional[FleetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetType') }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleArn') }})
    idle_disconnect_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdleDisconnectTimeoutInSeconds') }})
    image_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageArn') }})
    image_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageName') }})
    max_user_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxUserDurationInSeconds') }})
    stream_view: Optional[StreamViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamView') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
