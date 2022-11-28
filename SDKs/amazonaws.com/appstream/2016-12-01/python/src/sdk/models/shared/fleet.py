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
class Fleet:
    r"""Fleet
    Describes a fleet.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    compute_capacity_status: ComputeCapacityStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeCapacityStatus') }})
    instance_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    state: FleetStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    disconnect_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisconnectTimeoutInSeconds') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    domain_join_info: Optional[DomainJoinInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainJoinInfo') }})
    enable_default_internet_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableDefaultInternetAccess') }})
    fleet_errors: Optional[List[FleetError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetErrors') }})
    fleet_type: Optional[FleetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetType') }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleArn') }})
    idle_disconnect_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdleDisconnectTimeoutInSeconds') }})
    image_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageArn') }})
    image_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageName') }})
    max_user_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxUserDurationInSeconds') }})
    stream_view: Optional[StreamViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamView') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
