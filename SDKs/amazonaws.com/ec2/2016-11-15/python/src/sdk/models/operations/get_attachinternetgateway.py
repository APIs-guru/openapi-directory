from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAttachInternetGatewayActionEnum(str, Enum):
    ATTACH_INTERNET_GATEWAY = "AttachInternetGateway"

class GetAttachInternetGatewayVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetAttachInternetGatewayQueryParams:
    action: GetAttachInternetGatewayActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    internet_gateway_id: str = field(default=None, metadata={'query_param': { 'field_name': 'InternetGatewayId', 'style': 'form', 'explode': True }})
    version: GetAttachInternetGatewayVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_id: str = field(default=None, metadata={'query_param': { 'field_name': 'VpcId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAttachInternetGatewayHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetAttachInternetGatewayRequest:
    query_params: GetAttachInternetGatewayQueryParams = field(default=None)
    headers: GetAttachInternetGatewayHeaders = field(default=None)
    

@dataclass
class GetAttachInternetGatewayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
