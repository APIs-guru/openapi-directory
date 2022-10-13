from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetOnPremisesInstanceXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_GET_ON_PREMISES_INSTANCE = "CodeDeploy_20141006.GetOnPremisesInstance"


@dataclass
class GetOnPremisesInstanceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetOnPremisesInstanceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetOnPremisesInstanceRequest:
    headers: GetOnPremisesInstanceHeaders = field(default=None)
    request: shared.GetOnPremisesInstanceInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetOnPremisesInstanceResponse:
    content_type: str = field(default=None)
    get_on_premises_instance_output: Optional[shared.GetOnPremisesInstanceOutput] = field(default=None)
    instance_name_required_exception: Optional[Any] = field(default=None)
    instance_not_registered_exception: Optional[Any] = field(default=None)
    invalid_instance_name_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
