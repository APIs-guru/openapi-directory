from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetOrganizationConformancePackDetailedStatusQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetOrganizationConformancePackDetailedStatusXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_ORGANIZATION_CONFORMANCE_PACK_DETAILED_STATUS = "StarlingDoveService.GetOrganizationConformancePackDetailedStatus"


@dataclass
class GetOrganizationConformancePackDetailedStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetOrganizationConformancePackDetailedStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetOrganizationConformancePackDetailedStatusRequest:
    query_params: GetOrganizationConformancePackDetailedStatusQueryParams = field(default=None)
    headers: GetOrganizationConformancePackDetailedStatusHeaders = field(default=None)
    request: shared.GetOrganizationConformancePackDetailedStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetOrganizationConformancePackDetailedStatusResponse:
    content_type: str = field(default=None)
    get_organization_conformance_pack_detailed_status_response: Optional[shared.GetOrganizationConformancePackDetailedStatusResponse] = field(default=None)
    invalid_limit_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    no_such_organization_conformance_pack_exception: Optional[Any] = field(default=None)
    organization_access_denied_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
