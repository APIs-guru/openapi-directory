from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class UntagResourcePathParams:
    resource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UntagResourceQueryParams:
    tag_keys: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'tagKeys', 'style': 'form', 'explode': True }})
    

@dataclass
class UntagResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UntagResourceRequest:
    path_params: UntagResourcePathParams = field(default=None)
    query_params: UntagResourceQueryParams = field(default=None)
    headers: UntagResourceHeaders = field(default=None)
    

@dataclass
class UntagResourceResponse:
    access_point_not_found: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
