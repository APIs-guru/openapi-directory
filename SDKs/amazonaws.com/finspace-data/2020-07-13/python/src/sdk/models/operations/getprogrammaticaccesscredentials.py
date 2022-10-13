from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProgrammaticAccessCredentialsQueryParams:
    duration_in_minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'durationInMinutes', 'style': 'form', 'explode': True }})
    environment_id: str = field(default=None, metadata={'query_param': { 'field_name': 'environmentId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProgrammaticAccessCredentialsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetProgrammaticAccessCredentialsRequest:
    query_params: GetProgrammaticAccessCredentialsQueryParams = field(default=None)
    headers: GetProgrammaticAccessCredentialsHeaders = field(default=None)
    

@dataclass
class GetProgrammaticAccessCredentialsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_programmatic_access_credentials_response: Optional[shared.GetProgrammaticAccessCredentialsResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
