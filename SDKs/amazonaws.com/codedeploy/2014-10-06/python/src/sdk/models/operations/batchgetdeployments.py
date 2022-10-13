from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class BatchGetDeploymentsXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_BATCH_GET_DEPLOYMENTS = "CodeDeploy_20141006.BatchGetDeployments"


@dataclass
class BatchGetDeploymentsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: BatchGetDeploymentsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class BatchGetDeploymentsRequest:
    headers: BatchGetDeploymentsHeaders = field(default=None)
    request: shared.BatchGetDeploymentsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchGetDeploymentsResponse:
    batch_get_deployments_output: Optional[shared.BatchGetDeploymentsOutput] = field(default=None)
    batch_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    deployment_id_required_exception: Optional[Any] = field(default=None)
    invalid_deployment_id_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
