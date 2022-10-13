from dataclasses import dataclass, field
from typing import Enum,Optional

class GetUpdateDefaultSearchFieldActionEnum(str, Enum):
    UPDATE_DEFAULT_SEARCH_FIELD = "UpdateDefaultSearchField"

class GetUpdateDefaultSearchFieldVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_02_01 = "2011-02-01"


@dataclass
class GetUpdateDefaultSearchFieldQueryParams:
    action: GetUpdateDefaultSearchFieldActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    default_search_field: str = field(default=None, metadata={'query_param': { 'field_name': 'DefaultSearchField', 'style': 'form', 'explode': True }})
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    version: GetUpdateDefaultSearchFieldVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateDefaultSearchFieldHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetUpdateDefaultSearchFieldRequest:
    query_params: GetUpdateDefaultSearchFieldQueryParams = field(default=None)
    headers: GetUpdateDefaultSearchFieldHeaders = field(default=None)
    

@dataclass
class GetUpdateDefaultSearchFieldResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
