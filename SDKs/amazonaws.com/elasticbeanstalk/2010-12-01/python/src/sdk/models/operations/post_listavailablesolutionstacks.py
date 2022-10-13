from dataclasses import dataclass, field
from typing import Enum,List,Optional

class PostListAvailableSolutionStacksActionEnum(str, Enum):
    LIST_AVAILABLE_SOLUTION_STACKS = "ListAvailableSolutionStacks"

class PostListAvailableSolutionStacksVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class PostListAvailableSolutionStacksQueryParams:
    action: PostListAvailableSolutionStacksActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: PostListAvailableSolutionStacksVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostListAvailableSolutionStacksHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class PostListAvailableSolutionStacksRequest:
    query_params: PostListAvailableSolutionStacksQueryParams = field(default=None)
    headers: PostListAvailableSolutionStacksHeaders = field(default=None)
    

@dataclass
class PostListAvailableSolutionStacksResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
