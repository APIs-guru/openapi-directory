from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetContainerRecipeQueryParams:
    container_recipe_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'containerRecipeArn', 'style': 'form', 'explode': True }})
    

@dataclass
class GetContainerRecipeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainerRecipeRequest:
    query_params: GetContainerRecipeQueryParams = field(default=None)
    headers: GetContainerRecipeHeaders = field(default=None)
    

@dataclass
class GetContainerRecipeResponse:
    call_rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    get_container_recipe_response: Optional[shared.GetContainerRecipeResponse] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
