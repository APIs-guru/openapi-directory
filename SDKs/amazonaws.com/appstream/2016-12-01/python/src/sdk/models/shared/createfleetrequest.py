from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import computecapacity
from . import domainjoininfo
from . import fleettype_enum
from . import streamview_enum
from . import vpcconfig


@dataclass_json
@dataclass
class CreateFleetRequest:
    compute_capacity: computecapacity.ComputeCapacity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputeCapacity' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    disconnect_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisconnectTimeoutInSeconds' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    domain_join_info: Optional[domainjoininfo.DomainJoinInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainJoinInfo' }})
    enable_default_internet_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableDefaultInternetAccess' }})
    fleet_type: Optional[fleettype_enum.FleetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetType' }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRoleArn' }})
    idle_disconnect_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdleDisconnectTimeoutInSeconds' }})
    image_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageArn' }})
    image_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageName' }})
    instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    max_user_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxUserDurationInSeconds' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    stream_view: Optional[streamview_enum.StreamViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamView' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
