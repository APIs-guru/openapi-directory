from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDeploymentPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'GroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeploymentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amzn_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token' }})
    
class CreateDeploymentRequestBodyDeploymentTypeEnum(str, Enum):
    NEW_DEPLOYMENT = "NewDeployment"
    REDEPLOYMENT = "Redeployment"
    RESET_DEPLOYMENT = "ResetDeployment"
    FORCE_RESET_DEPLOYMENT = "ForceResetDeployment"


@dataclass_json
@dataclass
class CreateDeploymentRequestBody:
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentId' }})
    deployment_type: CreateDeploymentRequestBodyDeploymentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentType' }})
    group_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupVersionId' }})
    

@dataclass
class CreateDeploymentRequest:
    path_params: CreateDeploymentPathParams = field(default=None)
    headers: CreateDeploymentHeaders = field(default=None)
    request: CreateDeploymentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeploymentResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_deployment_response: Optional[shared.CreateDeploymentResponse] = field(default=None)
    status_code: int = field(default=None)
    
