from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSetSecurityTokenServicePreferencesActionEnum(str, Enum):
    SET_SECURITY_TOKEN_SERVICE_PREFERENCES = "SetSecurityTokenServicePreferences"

class GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum(str, Enum):
    V1_TOKEN = "v1Token"
    V2_TOKEN = "v2Token"

class GetSetSecurityTokenServicePreferencesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetSetSecurityTokenServicePreferencesQueryParams:
    action: GetSetSecurityTokenServicePreferencesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    global_endpoint_token_version: GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'GlobalEndpointTokenVersion', 'style': 'form', 'explode': True }})
    version: GetSetSecurityTokenServicePreferencesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetSecurityTokenServicePreferencesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetSetSecurityTokenServicePreferencesRequest:
    query_params: GetSetSecurityTokenServicePreferencesQueryParams = field(default=None)
    headers: GetSetSecurityTokenServicePreferencesHeaders = field(default=None)
    

@dataclass
class GetSetSecurityTokenServicePreferencesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
