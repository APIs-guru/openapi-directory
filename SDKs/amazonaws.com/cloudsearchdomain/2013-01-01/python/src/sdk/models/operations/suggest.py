from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class SuggestFormatEnum(str, Enum):
    SDK = "sdk"

class SuggestPrettyEnum(str, Enum):
    TRUE = "true"


@dataclass
class SuggestQueryParams:
    format: SuggestFormatEnum = field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    pretty: SuggestPrettyEnum = field(metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    suggester: str = field(metadata={'query_param': { 'field_name': 'suggester', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

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
    headers: SuggestHeaders = field()
    query_params: SuggestQueryParams = field()
    

@dataclass
class SuggestResponse:
    content_type: str = field()
    status_code: int = field()
    search_exception: Optional[shared.SearchException] = field(default=None)
    suggest_response: Optional[shared.SuggestResponse] = field(default=None)
    
