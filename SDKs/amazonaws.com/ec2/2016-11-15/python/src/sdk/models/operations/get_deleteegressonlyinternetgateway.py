from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteEgressOnlyInternetGatewayActionEnum(str, Enum):
    DELETE_EGRESS_ONLY_INTERNET_GATEWAY = "DeleteEgressOnlyInternetGateway"

class GetDeleteEgressOnlyInternetGatewayVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDeleteEgressOnlyInternetGatewayQueryParams:
    action: GetDeleteEgressOnlyInternetGatewayActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    egress_only_internet_gateway_id: str = field(default=None, metadata={'query_param': { 'field_name': 'EgressOnlyInternetGatewayId', 'style': 'form', 'explode': True }})
    version: GetDeleteEgressOnlyInternetGatewayVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteEgressOnlyInternetGatewayHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDeleteEgressOnlyInternetGatewayRequest:
    query_params: GetDeleteEgressOnlyInternetGatewayQueryParams = field(default=None)
    headers: GetDeleteEgressOnlyInternetGatewayHeaders = field(default=None)
    

@dataclass
class GetDeleteEgressOnlyInternetGatewayResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
