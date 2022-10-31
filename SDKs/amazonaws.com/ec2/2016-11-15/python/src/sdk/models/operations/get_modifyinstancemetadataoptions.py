from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyInstanceMetadataOptionsActionEnum(str, Enum):
    MODIFY_INSTANCE_METADATA_OPTIONS = "ModifyInstanceMetadataOptions"

class GetModifyInstanceMetadataOptionsHTTPEndpointEnum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"

class GetModifyInstanceMetadataOptionsHTTPProtocolIpv6Enum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"

class GetModifyInstanceMetadataOptionsHTTPTokensEnum(str, Enum):
    OPTIONAL = "optional"
    REQUIRED = "required"

class GetModifyInstanceMetadataOptionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyInstanceMetadataOptionsQueryParams:
    action: GetModifyInstanceMetadataOptionsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    http_endpoint: Optional[GetModifyInstanceMetadataOptionsHTTPEndpointEnum] = field(default=None, metadata={'query_param': { 'field_name': 'HttpEndpoint', 'style': 'form', 'explode': True }})
    http_protocol_ipv6: Optional[GetModifyInstanceMetadataOptionsHTTPProtocolIpv6Enum] = field(default=None, metadata={'query_param': { 'field_name': 'HttpProtocolIpv6', 'style': 'form', 'explode': True }})
    http_put_response_hop_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'HttpPutResponseHopLimit', 'style': 'form', 'explode': True }})
    http_tokens: Optional[GetModifyInstanceMetadataOptionsHTTPTokensEnum] = field(default=None, metadata={'query_param': { 'field_name': 'HttpTokens', 'style': 'form', 'explode': True }})
    instance_id: str = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    version: GetModifyInstanceMetadataOptionsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyInstanceMetadataOptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyInstanceMetadataOptionsRequest:
    query_params: GetModifyInstanceMetadataOptionsQueryParams = field(default=None)
    headers: GetModifyInstanceMetadataOptionsHeaders = field(default=None)
    

@dataclass
class GetModifyInstanceMetadataOptionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
