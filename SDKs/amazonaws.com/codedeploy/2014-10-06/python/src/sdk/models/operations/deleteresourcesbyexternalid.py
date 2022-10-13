from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteResourcesByExternalIDXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_DELETE_RESOURCES_BY_EXTERNAL_ID = "CodeDeploy_20141006.DeleteResourcesByExternalId"


@dataclass
class DeleteResourcesByExternalIDHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeleteResourcesByExternalIDXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeleteResourcesByExternalIDRequest:
    headers: DeleteResourcesByExternalIDHeaders = field(default=None)
    request: shared.DeleteResourcesByExternalIDInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteResourcesByExternalIDResponse:
    content_type: str = field(default=None)
    delete_resources_by_external_id_output: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
