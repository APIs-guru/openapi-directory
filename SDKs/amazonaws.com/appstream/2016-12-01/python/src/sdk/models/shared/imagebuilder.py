from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accessendpoint
from . import domainjoininfo
from . import resourceerror
from . import networkaccessconfiguration
from . import platformtype_enum
from . import imagebuilderstate_enum
from . import imagebuilderstatechangereason
from . import vpcconfig


@dataclass_json
@dataclass
class ImageBuilder:
    access_endpoints: Optional[List[accessendpoint.AccessEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessEndpoints' }})
    appstream_agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppstreamAgentVersion' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    domain_join_info: Optional[domainjoininfo.DomainJoinInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainJoinInfo' }})
    enable_default_internet_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableDefaultInternetAccess' }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRoleArn' }})
    image_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageArn' }})
    image_builder_errors: Optional[List[resourceerror.ResourceError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageBuilderErrors' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    network_access_configuration: Optional[networkaccessconfiguration.NetworkAccessConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkAccessConfiguration' }})
    platform: Optional[platformtype_enum.PlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Platform' }})
    state: Optional[imagebuilderstate_enum.ImageBuilderStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_change_reason: Optional[imagebuilderstatechangereason.ImageBuilderStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateChangeReason' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
