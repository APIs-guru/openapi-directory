from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class BatchGetOnPremisesInstancesXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_BATCH_GET_ON_PREMISES_INSTANCES = "CodeDeploy_20141006.BatchGetOnPremisesInstances"


@dataclass
class BatchGetOnPremisesInstancesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: BatchGetOnPremisesInstancesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchGetOnPremisesInstancesRequest:
    headers: BatchGetOnPremisesInstancesHeaders = field(default=None)
    request: shared.BatchGetOnPremisesInstancesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchGetOnPremisesInstancesResponse:
    batch_get_on_premises_instances_output: Optional[shared.BatchGetOnPremisesInstancesOutput] = field(default=None)
    batch_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    instance_name_required_exception: Optional[Any] = field(default=None)
    invalid_instance_name_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
