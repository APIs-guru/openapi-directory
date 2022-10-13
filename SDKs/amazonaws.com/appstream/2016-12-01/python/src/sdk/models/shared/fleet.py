from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import computecapacitystatus
from . import domainjoininfo
from . import fleeterror
from . import fleettype_enum
from . import fleetstate_enum
from . import streamview_enum
from . import vpcconfig


@dataclass_json
@dataclass
class Fleet:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    compute_capacity_status: computecapacitystatus.ComputeCapacityStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputeCapacityStatus' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    disconnect_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisconnectTimeoutInSeconds' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    domain_join_info: Optional[domainjoininfo.DomainJoinInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainJoinInfo' }})
    enable_default_internet_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableDefaultInternetAccess' }})
    fleet_errors: Optional[List[fleeterror.FleetError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetErrors' }})
    fleet_type: Optional[fleettype_enum.FleetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetType' }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRoleArn' }})
    idle_disconnect_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdleDisconnectTimeoutInSeconds' }})
    image_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageArn' }})
    image_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageName' }})
    instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    max_user_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxUserDurationInSeconds' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    state: fleetstate_enum.FleetStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    stream_view: Optional[streamview_enum.StreamViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamView' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
