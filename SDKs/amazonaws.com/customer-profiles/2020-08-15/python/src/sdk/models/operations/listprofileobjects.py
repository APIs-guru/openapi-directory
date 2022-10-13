from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListProfileObjectsPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListProfileObjectsQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max-results', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'next-token', 'style': 'form', 'explode': True }})
    

@dataclass
class ListProfileObjectsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class ListProfileObjectsRequestBodyObjectFilter:
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyName' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    

@dataclass_json
@dataclass
class ListProfileObjectsRequestBody:
    object_filter: Optional[ListProfileObjectsRequestBodyObjectFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectFilter' }})
    object_type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectTypeName' }})
    profile_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfileId' }})
    

@dataclass
class ListProfileObjectsRequest:
    path_params: ListProfileObjectsPathParams = field(default=None)
    query_params: ListProfileObjectsQueryParams = field(default=None)
    headers: ListProfileObjectsHeaders = field(default=None)
    request: ListProfileObjectsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListProfileObjectsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_profile_objects_response: Optional[shared.ListProfileObjectsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
