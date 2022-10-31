from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RemoveAttributesFromFindingsXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_REMOVE_ATTRIBUTES_FROM_FINDINGS = "InspectorService.RemoveAttributesFromFindings"


@dataclass
class RemoveAttributesFromFindingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RemoveAttributesFromFindingsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAttributesFromFindingsRequest:
    headers: RemoveAttributesFromFindingsHeaders = field(default=None)
    request: shared.RemoveAttributesFromFindingsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveAttributesFromFindingsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    no_such_entity_exception: Optional[Any] = field(default=None)
    remove_attributes_from_findings_response: Optional[shared.RemoveAttributesFromFindingsResponse] = field(default=None)
    service_temporarily_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
