from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetApplicationRevisionXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_GET_APPLICATION_REVISION = "CodeDeploy_20141006.GetApplicationRevision"


@dataclass
class GetApplicationRevisionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetApplicationRevisionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetApplicationRevisionRequest:
    headers: GetApplicationRevisionHeaders = field(default=None)
    request: shared.GetApplicationRevisionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetApplicationRevisionResponse:
    application_does_not_exist_exception: Optional[Any] = field(default=None)
    application_name_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_application_revision_output: Optional[shared.GetApplicationRevisionOutput] = field(default=None)
    invalid_application_name_exception: Optional[Any] = field(default=None)
    invalid_revision_exception: Optional[Any] = field(default=None)
    revision_does_not_exist_exception: Optional[Any] = field(default=None)
    revision_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
