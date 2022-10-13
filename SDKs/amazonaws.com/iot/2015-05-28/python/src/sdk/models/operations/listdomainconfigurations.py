from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListDomainConfigurationsServiceTypeEnum(str, Enum):
    DATA = "DATA"
    CREDENTIAL_PROVIDER = "CREDENTIAL_PROVIDER"
    JOBS = "JOBS"


@dataclass
class ListDomainConfigurationsQueryParams:
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'marker', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    service_type: Optional[ListDomainConfigurationsServiceTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'serviceType', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDomainConfigurationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListDomainConfigurationsRequest:
    query_params: ListDomainConfigurationsQueryParams = field(default=None)
    headers: ListDomainConfigurationsHeaders = field(default=None)
    

@dataclass
class ListDomainConfigurationsResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_domain_configurations_response: Optional[shared.ListDomainConfigurationsResponse] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
