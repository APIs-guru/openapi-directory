from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateNodegroupPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNodegroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
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
    r"""CreateNodegroupRequestBodyLaunchTemplate
    <p>An object representing a node group launch template specification. The launch template cannot include <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html\"> <code>SubnetId</code> </a>, <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html\"> <code>IamInstanceProfile</code> </a>, <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html\"> <code>RequestSpotInstances</code> </a>, <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html\"> <code>HibernationOptions</code> </a>, or <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html\"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html\"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href=\"https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html\">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class CreateNodegroupRequestBodyRemoteAccess:
    r"""CreateNodegroupRequestBodyRemoteAccess
    An object representing the remote access configuration for the managed node group.
    """
    
    ec2_ssh_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2SshKey') }})
    source_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSecurityGroups') }})
    

@dataclass_json
@dataclass
class CreateNodegroupRequestBodyScalingConfig:
    r"""CreateNodegroupRequestBodyScalingConfig
    An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
    """
    
    desired_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredSize') }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSize') }})
    min_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minSize') }})
    

@dataclass_json
@dataclass
class CreateNodegroupRequestBodyUpdateConfig:
    r"""CreateNodegroupRequestBodyUpdateConfig
    The node group update configuration.
    """
    
    max_unavailable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxUnavailable') }})
    max_unavailable_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxUnavailablePercentage') }})
    

@dataclass_json
@dataclass
class CreateNodegroupRequestBody:
    node_role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeRole') }})
    nodegroup_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodegroupName') }})
    subnets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    ami_type: Optional[CreateNodegroupRequestBodyAmiTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amiType') }})
    capacity_type: Optional[CreateNodegroupRequestBodyCapacityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityType') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    disk_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSize') }})
    instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTypes') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    launch_template: Optional[CreateNodegroupRequestBodyLaunchTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchTemplate') }})
    release_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseVersion') }})
    remote_access: Optional[CreateNodegroupRequestBodyRemoteAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccess') }})
    scaling_config: Optional[CreateNodegroupRequestBodyScalingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scalingConfig') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    taints: Optional[List[shared.Taint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taints') }})
    update_config: Optional[CreateNodegroupRequestBodyUpdateConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateConfig') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass
class CreateNodegroupRequest:
    headers: CreateNodegroupHeaders = field()
    path_params: CreateNodegroupPathParams = field()
    request: CreateNodegroupRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNodegroupResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    create_nodegroup_response: Optional[shared.CreateNodegroupResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    
