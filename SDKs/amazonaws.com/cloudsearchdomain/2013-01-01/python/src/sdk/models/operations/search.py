from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class SearchFormatEnum(str, Enum):
    SDK = "sdk"

class SearchPrettyEnum(str, Enum):
    TRUE = "true"

class SearchQParserEnum(str, Enum):
    SIMPLE = "simple"
    STRUCTURED = "structured"
    LUCENE = "lucene"
    DISMAX = "dismax"


@dataclass
class SearchQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    expr: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expr', 'style': 'form', 'explode': True }})
    facet: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'facet', 'style': 'form', 'explode': True }})
    format: SearchFormatEnum = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    fq: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fq', 'style': 'form', 'explode': True }})
    highlight: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'highlight', 'style': 'form', 'explode': True }})
    partial: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'partial', 'style': 'form', 'explode': True }})
    pretty: SearchPrettyEnum = field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    q_options: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q.options', 'style': 'form', 'explode': True }})
    q_parser: Optional[SearchQParserEnum] = field(default=None, metadata={'query_param': { 'field_name': 'q.parser', 'style': 'form', 'explode': True }})
    return_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'return', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    stats: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'stats', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class SearchRequest:
    query_params: SearchQueryParams = field(default=None)
    headers: SearchHeaders = field(default=None)
    

@dataclass
class SearchResponse:
    content_type: str = field(default=None)
    search_exception: Optional[shared.SearchException] = field(default=None)
    search_response: Optional[shared.SearchResponse] = field(default=None)
    status_code: int = field(default=None)
    
