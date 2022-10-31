from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class BatchGetDeploymentTargetsXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_BATCH_GET_DEPLOYMENT_TARGETS = "CodeDeploy_20141006.BatchGetDeploymentTargets"


@dataclass
class BatchGetDeploymentTargetsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: BatchGetDeploymentTargetsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchGetDeploymentTargetsRequest:
    headers: BatchGetDeploymentTargetsHeaders = field(default=None)
    request: shared.BatchGetDeploymentTargetsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchGetDeploymentTargetsResponse:
    batch_get_deployment_targets_output: Optional[shared.BatchGetDeploymentTargetsOutput] = field(default=None)
    content_type: str = field(default=None)
    deployment_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_id_required_exception: Optional[Any] = field(default=None)
    deployment_not_started_exception: Optional[Any] = field(default=None)
    deployment_target_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_target_id_required_exception: Optional[Any] = field(default=None)
    deployment_target_list_size_exceeded_exception: Optional[Any] = field(default=None)
    instance_does_not_exist_exception: Optional[Any] = field(default=None)
    invalid_deployment_id_exception: Optional[Any] = field(default=None)
    invalid_deployment_target_id_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
