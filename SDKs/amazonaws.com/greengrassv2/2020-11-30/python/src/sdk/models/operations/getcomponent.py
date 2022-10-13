from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetComponentPathParams:
    arn: str = field(default=None, metadata={'path_param': { 'field_name': 'arn', 'style': 'simple', 'explode': False }})
    
class GetComponentRecipeOutputFormatEnum(str, Enum):
    JSON = "JSON"
    YAML = "YAML"


@dataclass
class GetComponentQueryParams:
    recipe_output_format: Optional[GetComponentRecipeOutputFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'recipeOutputFormat', 'style': 'form', 'explode': True }})
    

@dataclass
class GetComponentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetComponentRequest:
    path_params: GetComponentPathParams = field(default=None)
    query_params: GetComponentQueryParams = field(default=None)
    headers: GetComponentHeaders = field(default=None)
    

@dataclass
class GetComponentResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_component_response: Optional[shared.GetComponentResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
