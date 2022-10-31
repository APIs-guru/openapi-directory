from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeregisterOnPremisesInstanceXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_DEREGISTER_ON_PREMISES_INSTANCE = "CodeDeploy_20141006.DeregisterOnPremisesInstance"


@dataclass
class DeregisterOnPremisesInstanceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeregisterOnPremisesInstanceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeregisterOnPremisesInstanceRequest:
    headers: DeregisterOnPremisesInstanceHeaders = field(default=None)
    request: shared.DeregisterOnPremisesInstanceInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeregisterOnPremisesInstanceResponse:
    content_type: str = field(default=None)
    instance_name_required_exception: Optional[Any] = field(default=None)
    invalid_instance_name_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
