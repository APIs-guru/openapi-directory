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
class UpdateFleetRequest:
    attributes_to_delete: Optional[List[FleetAttributeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributesToDelete') }})
    compute_capacity: Optional[ComputeCapacity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeCapacity') }})
    delete_vpc_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteVpcConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    disconnect_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisconnectTimeoutInSeconds') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    domain_join_info: Optional[DomainJoinInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainJoinInfo') }})
    enable_default_internet_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableDefaultInternetAccess') }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleArn') }})
    idle_disconnect_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdleDisconnectTimeoutInSeconds') }})
    image_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageArn') }})
    image_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageName') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    max_user_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxUserDurationInSeconds') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    stream_view: Optional[StreamViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamView') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
