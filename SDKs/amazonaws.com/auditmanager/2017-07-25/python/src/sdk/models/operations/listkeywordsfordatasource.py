from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListKeywordsForDataSourceSourceEnum(str, Enum):
    AWS_CLOUDTRAIL = "AWS_Cloudtrail"
    AWS_CONFIG = "AWS_Config"
    AWS_SECURITY_HUB = "AWS_Security_Hub"
    AWS_API_CALL = "AWS_API_Call"
    MANUAL = "MANUAL"


@dataclass
class ListKeywordsForDataSourceQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    source: ListKeywordsForDataSourceSourceEnum = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclass
class ListKeywordsForDataSourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListKeywordsForDataSourceRequest:
    query_params: ListKeywordsForDataSourceQueryParams = field(default=None)
    headers: ListKeywordsForDataSourceHeaders = field(default=None)
    

@dataclass
class ListKeywordsForDataSourceResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_keywords_for_data_source_response: Optional[shared.ListKeywordsForDataSourceResponse] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
