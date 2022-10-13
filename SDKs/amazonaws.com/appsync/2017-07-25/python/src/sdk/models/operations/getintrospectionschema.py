from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetIntrospectionSchemaPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    
class GetIntrospectionSchemaFormatEnum(str, Enum):
    SDL = "SDL"
    JSON = "JSON"


@dataclass
class GetIntrospectionSchemaQueryParams:
    format: GetIntrospectionSchemaFormatEnum = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    include_directives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDirectives', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIntrospectionSchemaHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetIntrospectionSchemaRequest:
    path_params: GetIntrospectionSchemaPathParams = field(default=None)
    query_params: GetIntrospectionSchemaQueryParams = field(default=None)
    headers: GetIntrospectionSchemaHeaders = field(default=None)
    

@dataclass
class GetIntrospectionSchemaResponse:
    content_type: str = field(default=None)
    get_introspection_schema_response: Optional[shared.GetIntrospectionSchemaResponse] = field(default=None)
    graph_ql_schema_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
