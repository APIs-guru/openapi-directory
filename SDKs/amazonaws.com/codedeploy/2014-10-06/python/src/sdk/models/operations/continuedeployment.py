from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ContinueDeploymentXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_CONTINUE_DEPLOYMENT = "CodeDeploy_20141006.ContinueDeployment"


@dataclass
class ContinueDeploymentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ContinueDeploymentXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContinueDeploymentRequest:
    headers: ContinueDeploymentHeaders = field(default=None)
    request: shared.ContinueDeploymentInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ContinueDeploymentResponse:
    content_type: str = field(default=None)
    deployment_already_completed_exception: Optional[Any] = field(default=None)
    deployment_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_id_required_exception: Optional[Any] = field(default=None)
    deployment_is_not_in_ready_state_exception: Optional[Any] = field(default=None)
    invalid_deployment_id_exception: Optional[Any] = field(default=None)
    invalid_deployment_status_exception: Optional[Any] = field(default=None)
    invalid_deployment_wait_type_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_action_for_deployment_type_exception: Optional[Any] = field(default=None)
    
