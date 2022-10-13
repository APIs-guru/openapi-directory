from dataclasses import dataclass, field
from typing import Enum,Optional

class GetResetNetworkInterfaceAttributeActionEnum(str, Enum):
    RESET_NETWORK_INTERFACE_ATTRIBUTE = "ResetNetworkInterfaceAttribute"

class GetResetNetworkInterfaceAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetResetNetworkInterfaceAttributeQueryParams:
    action: GetResetNetworkInterfaceAttributeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    network_interface_id: str = field(default=None, metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    source_dest_check: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceDestCheck', 'style': 'form', 'explode': True }})
    version: GetResetNetworkInterfaceAttributeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetResetNetworkInterfaceAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetResetNetworkInterfaceAttributeRequest:
    query_params: GetResetNetworkInterfaceAttributeQueryParams = field(default=None)
    headers: GetResetNetworkInterfaceAttributeHeaders = field(default=None)
    

@dataclass
class GetResetNetworkInterfaceAttributeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
