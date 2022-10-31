from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetDeploymentGroupXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_GET_DEPLOYMENT_GROUP = "CodeDeploy_20141006.GetDeploymentGroup"


@dataclass
class GetDeploymentGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetDeploymentGroupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeploymentGroupRequest:
    headers: GetDeploymentGroupHeaders = field(default=None)
    request: shared.GetDeploymentGroupInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDeploymentGroupResponse:
    application_does_not_exist_exception: Optional[Any] = field(default=None)
    application_name_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    deployment_config_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_group_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_group_name_required_exception: Optional[Any] = field(default=None)
    get_deployment_group_output: Optional[shared.GetDeploymentGroupOutput] = field(default=None)
    invalid_application_name_exception: Optional[Any] = field(default=None)
    invalid_deployment_group_name_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
