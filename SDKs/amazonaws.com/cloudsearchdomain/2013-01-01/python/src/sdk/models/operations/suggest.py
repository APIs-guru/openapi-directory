from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class SuggestFormatEnum(str, Enum):
    SDK = "sdk"

class SuggestPrettyEnum(str, Enum):
    TRUE = "true"


@dataclass
class SuggestQueryParams:
    format: SuggestFormatEnum = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    pretty: SuggestPrettyEnum = field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    suggester: str = field(default=None, metadata={'query_param': { 'field_name': 'suggester', 'style': 'form', 'explode': True }})
    

@dataclass
class SuggestHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class SuggestRequest:
    query_params: SuggestQueryParams = field(default=None)
    headers: SuggestHeaders = field(default=None)
    

@dataclass
class SuggestResponse:
    content_type: str = field(default=None)
    search_exception: Optional[shared.SearchException] = field(default=None)
    status_code: int = field(default=None)
    suggest_response: Optional[shared.SuggestResponse] = field(default=None)
    
