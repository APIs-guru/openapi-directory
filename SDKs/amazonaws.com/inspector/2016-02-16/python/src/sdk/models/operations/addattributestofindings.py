from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AddAttributesToFindingsXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_ADD_ATTRIBUTES_TO_FINDINGS = "InspectorService.AddAttributesToFindings"


@dataclass
class AddAttributesToFindingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AddAttributesToFindingsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AddAttributesToFindingsRequest:
    headers: AddAttributesToFindingsHeaders = field(default=None)
    request: shared.AddAttributesToFindingsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddAttributesToFindingsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    add_attributes_to_findings_response: Optional[shared.AddAttributesToFindingsResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    no_such_entity_exception: Optional[Any] = field(default=None)
    service_temporarily_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
