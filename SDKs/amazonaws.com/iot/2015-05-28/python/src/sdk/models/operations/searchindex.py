from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SearchIndexHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SearchIndexRequestBody:
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexName' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    query_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryString' }})
    query_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryVersion' }})
    

@dataclass
class SearchIndexRequest:
    headers: SearchIndexHeaders = field(default=None)
    request: SearchIndexRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SearchIndexResponse:
    content_type: str = field(default=None)
    index_not_ready_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_query_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    search_index_response: Optional[shared.SearchIndexResponse] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
