from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutOrganizationConformancePackXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_ORGANIZATION_CONFORMANCE_PACK = "StarlingDoveService.PutOrganizationConformancePack"


@dataclass
class PutOrganizationConformancePackHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutOrganizationConformancePackXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutOrganizationConformancePackRequest:
    headers: PutOrganizationConformancePackHeaders = field(default=None)
    request: shared.PutOrganizationConformancePackRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutOrganizationConformancePackResponse:
    content_type: str = field(default=None)
    insufficient_permissions_exception: Optional[Any] = field(default=None)
    max_number_of_organization_conformance_packs_exceeded_exception: Optional[Any] = field(default=None)
    no_available_organization_exception: Optional[Any] = field(default=None)
    organization_access_denied_exception: Optional[Any] = field(default=None)
    organization_all_features_not_enabled_exception: Optional[Any] = field(default=None)
    organization_conformance_pack_template_validation_exception: Optional[Any] = field(default=None)
    put_organization_conformance_pack_response: Optional[shared.PutOrganizationConformancePackResponse] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
