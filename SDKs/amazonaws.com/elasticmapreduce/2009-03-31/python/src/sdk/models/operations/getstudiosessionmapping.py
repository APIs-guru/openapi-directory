from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetStudioSessionMappingXAmzTargetEnum(str, Enum):
    ELASTIC_MAP_REDUCE_GET_STUDIO_SESSION_MAPPING = "ElasticMapReduce.GetStudioSessionMapping"


@dataclass
class GetStudioSessionMappingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetStudioSessionMappingXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetStudioSessionMappingRequest:
    headers: GetStudioSessionMappingHeaders = field(default=None)
    request: shared.GetStudioSessionMappingInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetStudioSessionMappingResponse:
    content_type: str = field(default=None)
    get_studio_session_mapping_output: Optional[shared.GetStudioSessionMappingOutput] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
