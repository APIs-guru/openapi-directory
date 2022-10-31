from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetUpdateOpenIDConnectProviderThumbprintActionEnum(str, Enum):
    UPDATE_OPEN_ID_CONNECT_PROVIDER_THUMBPRINT = "UpdateOpenIDConnectProviderThumbprint"

class GetUpdateOpenIDConnectProviderThumbprintVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetUpdateOpenIDConnectProviderThumbprintQueryParams:
    action: GetUpdateOpenIDConnectProviderThumbprintActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    open_id_connect_provider_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'OpenIDConnectProviderArn', 'style': 'form', 'explode': True }})
    thumbprint_list: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'ThumbprintList', 'style': 'form', 'explode': True }})
    version: GetUpdateOpenIDConnectProviderThumbprintVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateOpenIDConnectProviderThumbprintHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUpdateOpenIDConnectProviderThumbprintRequest:
    query_params: GetUpdateOpenIDConnectProviderThumbprintQueryParams = field(default=None)
    headers: GetUpdateOpenIDConnectProviderThumbprintHeaders = field(default=None)
    

@dataclass
class GetUpdateOpenIDConnectProviderThumbprintResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
