from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateComputeEnvironmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateComputeEnvironmentRequestBodyComputeResources:
    allocation_strategy: Optional[shared.CrAllocationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allocationStrategy' }})
    bid_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidPercentage' }})
    desiredv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredvCpus' }})
    ec2_configuration: Optional[List[shared.Ec2Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2Configuration' }})
    ec2_key_pair: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2KeyPair' }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageId' }})
    instance_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceRole' }})
    instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceTypes' }})
    launch_template: Optional[shared.LaunchTemplateSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchTemplate' }})
    maxv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxvCpus' }})
    minv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minvCpus' }})
    placement_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementGroup' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroupIds' }})
    spot_iam_fleet_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spotIamFleetRole' }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[shared.CrTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class CreateComputeEnvironmentRequestBodyStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

class CreateComputeEnvironmentRequestBodyTypeEnum(str, Enum):
    MANAGED = "MANAGED"
    UNMANAGED = "UNMANAGED"


@dataclass_json
@dataclass
class CreateComputeEnvironmentRequestBody:
    compute_environment_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEnvironmentName' }})
    compute_resources: Optional[CreateComputeEnvironmentRequestBodyComputeResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeResources' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRole' }})
    state: Optional[CreateComputeEnvironmentRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: CreateComputeEnvironmentRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateComputeEnvironmentRequest:
    headers: CreateComputeEnvironmentHeaders = field(default=None)
    request: CreateComputeEnvironmentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateComputeEnvironmentResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_compute_environment_response: Optional[shared.CreateComputeEnvironmentResponse] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
