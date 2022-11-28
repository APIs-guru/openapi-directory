from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetUpdateDomainEndpointOptionsActionEnum(str, Enum):
    UPDATE_DOMAIN_ENDPOINT_OPTIONS = "UpdateDomainEndpointOptions"


@dataclass
class GetUpdateDomainEndpointOptionsDomainEndpointOptions:
    r"""GetUpdateDomainEndpointOptionsDomainEndpointOptions
    The domain's endpoint options.
    """
    
    enforce_https: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'EnforceHTTPS' }})
    tls_security_policy: Optional[shared.TLSSecurityPolicyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'TLSSecurityPolicy' }})
    
class GetUpdateDomainEndpointOptionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_01 = "2013-01-01"


@dataclass
class GetUpdateDomainEndpointOptionsQueryParams:
    action: GetUpdateDomainEndpointOptionsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_endpoint_options: GetUpdateDomainEndpointOptionsDomainEndpointOptions = field(metadata={'query_param': { 'field_name': 'DomainEndpointOptions', 'style': 'form', 'explode': True }})
    domain_name: str = field(metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    version: GetUpdateDomainEndpointOptionsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateDomainEndpointOptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUpdateDomainEndpointOptionsRequest:
    headers: GetUpdateDomainEndpointOptionsHeaders = field()
    query_params: GetUpdateDomainEndpointOptionsQueryParams = field()
    

@dataclass
class GetUpdateDomainEndpointOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
