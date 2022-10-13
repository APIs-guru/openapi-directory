from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateNodegroupPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNodegroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateNodegroupRequestBodyAmiTypeEnum(str, Enum):
    AL2_X86_64 = "AL2_x86_64"
    AL2_X86_64_GPU = "AL2_x86_64_GPU"
    AL2_ARM_64 = "AL2_ARM_64"
    CUSTOM = "CUSTOM"

class CreateNodegroupRequestBodyCapacityTypeEnum(str, Enum):
    ON_DEMAND = "ON_DEMAND"
    SPOT = "SPOT"


@dataclass_json
@dataclass
class CreateNodegroupRequestBodyLaunchTemplate:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class CreateNodegroupRequestBodyRemoteAccess:
    ec2_ssh_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2SshKey' }})
    source_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceSecurityGroups' }})
    

@dataclass_json
@dataclass
class CreateNodegroupRequestBodyScalingConfig:
    desired_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredSize' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSize' }})
    min_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minSize' }})
    

@dataclass_json
@dataclass
class CreateNodegroupRequestBodyUpdateConfig:
    max_unavailable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxUnavailable' }})
    max_unavailable_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxUnavailablePercentage' }})
    

@dataclass_json
@dataclass
class CreateNodegroupRequestBody:
    ami_type: Optional[CreateNodegroupRequestBodyAmiTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amiType' }})
    capacity_type: Optional[CreateNodegroupRequestBodyCapacityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityType' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    disk_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSize' }})
    instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceTypes' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    launch_template: Optional[CreateNodegroupRequestBodyLaunchTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchTemplate' }})
    node_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeRole' }})
    nodegroup_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodegroupName' }})
    release_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseVersion' }})
    remote_access: Optional[CreateNodegroupRequestBodyRemoteAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteAccess' }})
    scaling_config: Optional[CreateNodegroupRequestBodyScalingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scalingConfig' }})
    subnets: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    taints: Optional[List[shared.Taint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taints' }})
    update_config: Optional[CreateNodegroupRequestBodyUpdateConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateConfig' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class CreateNodegroupRequest:
    path_params: CreateNodegroupPathParams = field(default=None)
    headers: CreateNodegroupHeaders = field(default=None)
    request: CreateNodegroupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNodegroupResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_nodegroup_response: Optional[shared.CreateNodegroupResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
