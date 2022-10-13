from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetStoredQueryXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_STORED_QUERY = "StarlingDoveService.GetStoredQuery"


@dataclass
class GetStoredQueryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetStoredQueryXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetStoredQueryRequest:
    headers: GetStoredQueryHeaders = field(default=None)
    request: shared.GetStoredQueryRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetStoredQueryResponse:
    content_type: str = field(default=None)
    get_stored_query_response: Optional[shared.GetStoredQueryResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
