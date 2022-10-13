from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetRepositoryCatalogDataXAmzTargetEnum(str, Enum):
    SPENCER_FRONTEND_SERVICE_GET_REPOSITORY_CATALOG_DATA = "SpencerFrontendService.GetRepositoryCatalogData"


@dataclass
class GetRepositoryCatalogDataHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetRepositoryCatalogDataXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetRepositoryCatalogDataRequest:
    headers: GetRepositoryCatalogDataHeaders = field(default=None)
    request: shared.GetRepositoryCatalogDataRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetRepositoryCatalogDataResponse:
    content_type: str = field(default=None)
    get_repository_catalog_data_response: Optional[shared.GetRepositoryCatalogDataResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
