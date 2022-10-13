from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accessendpoint
from . import domainjoininfo
from . import vpcconfig


@dataclass_json
@dataclass
class CreateImageBuilderRequest:
    access_endpoints: Optional[List[accessendpoint.AccessEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessEndpoints' }})
    appstream_agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppstreamAgentVersion' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    domain_join_info: Optional[domainjoininfo.DomainJoinInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainJoinInfo' }})
    enable_default_internet_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableDefaultInternetAccess' }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRoleArn' }})
    image_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageArn' }})
    image_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageName' }})
    instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
