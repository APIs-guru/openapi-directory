from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateClusterRequestBodyKubernetesNetworkConfig:
    service_ipv4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceIpv4Cidr' }})
    

@dataclass_json
@dataclass
class CreateClusterRequestBodyLogging:
    cluster_logging: Optional[List[shared.LogSetup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterLogging' }})
    

@dataclass_json
@dataclass
class CreateClusterRequestBodyResourcesVpcConfig:
    endpoint_private_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointPrivateAccess' }})
    endpoint_public_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointPublicAccess' }})
    public_access_cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicAccessCidrs' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroupIds' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetIds' }})
    

@dataclass_json
@dataclass
class CreateClusterRequestBody:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    encryption_config: Optional[List[shared.EncryptionConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfig' }})
    kubernetes_network_config: Optional[CreateClusterRequestBodyKubernetesNetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetesNetworkConfig' }})
    logging: Optional[CreateClusterRequestBodyLogging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logging' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resources_vpc_config: CreateClusterRequestBodyResourcesVpcConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesVpcConfig' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class CreateClusterRequest:
    headers: CreateClusterHeaders = field(default=None)
    request: CreateClusterRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateClusterResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_cluster_response: Optional[shared.CreateClusterResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_availability_zone_exception: Optional[Any] = field(default=None)
    
