from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetUpdateDomainEndpointOptionsActionEnum(str, Enum):
    UPDATE_DOMAIN_ENDPOINT_OPTIONS = "UpdateDomainEndpointOptions"


@dataclass
class GetUpdateDomainEndpointOptionsDomainEndpointOptions:
    enforce_https: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'EnforceHTTPS' }})
    tls_security_policy: Optional[shared.TLSSecurityPolicyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'TLSSecurityPolicy' }})
    
class GetUpdateDomainEndpointOptionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_01 = "2013-01-01"


@dataclass
class GetUpdateDomainEndpointOptionsQueryParams:
    action: GetUpdateDomainEndpointOptionsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_endpoint_options: GetUpdateDomainEndpointOptionsDomainEndpointOptions = field(default=None, metadata={'query_param': { 'field_name': 'DomainEndpointOptions', 'style': 'form', 'explode': True }})
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    version: GetUpdateDomainEndpointOptionsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateDomainEndpointOptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetUpdateDomainEndpointOptionsRequest:
    query_params: GetUpdateDomainEndpointOptionsQueryParams = field(default=None)
    headers: GetUpdateDomainEndpointOptionsHeaders = field(default=None)
    

@dataclass
class GetUpdateDomainEndpointOptionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
