from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListRegistriesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListRegistriesXAmzTargetEnum(str, Enum):
    AWS_GLUE_LIST_REGISTRIES = "AWSGlue.ListRegistries"


@dataclass
class ListRegistriesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListRegistriesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListRegistriesRequest:
    query_params: ListRegistriesQueryParams = field(default=None)
    headers: ListRegistriesHeaders = field(default=None)
    request: shared.ListRegistriesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListRegistriesResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    list_registries_response: Optional[shared.ListRegistriesResponse] = field(default=None)
    status_code: int = field(default=None)
    
