from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateClusterConfigPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateClusterConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateClusterConfigRequestBodyLogging:
    r"""UpdateClusterConfigRequestBodyLogging
    An object representing the logging configuration for resources in your cluster.
    """
    
    cluster_logging: Optional[List[shared.LogSetup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterLogging') }})
    

@dataclass_json
@dataclass
class UpdateClusterConfigRequestBodyResourcesVpcConfig:
    r"""UpdateClusterConfigRequestBodyResourcesVpcConfig
    An object representing the VPC configuration to use for an Amazon EKS cluster.
    """
    
    endpoint_private_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointPrivateAccess') }})
    endpoint_public_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointPublicAccess') }})
    public_access_cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicAccessCidrs') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroupIds') }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetIds') }})
    

@dataclass_json
@dataclass
class UpdateClusterConfigRequestBody:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    logging: Optional[UpdateClusterConfigRequestBodyLogging] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    resources_vpc_config: Optional[UpdateClusterConfigRequestBodyResourcesVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesVpcConfig') }})
    

@dataclass
class UpdateClusterConfigRequest:
    headers: UpdateClusterConfigHeaders = field()
    path_params: UpdateClusterConfigPathParams = field()
    request: UpdateClusterConfigRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateClusterConfigResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    update_cluster_config_response: Optional[shared.UpdateClusterConfigResponse] = field(default=None)
    
