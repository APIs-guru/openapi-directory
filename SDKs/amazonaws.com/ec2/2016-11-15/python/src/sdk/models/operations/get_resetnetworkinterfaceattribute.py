from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetResetNetworkInterfaceAttributeActionEnum(str, Enum):
    RESET_NETWORK_INTERFACE_ATTRIBUTE = "ResetNetworkInterfaceAttribute"

class GetResetNetworkInterfaceAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetResetNetworkInterfaceAttributeQueryParams:
    action: GetResetNetworkInterfaceAttributeActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    network_interface_id: str = field(metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    version: GetResetNetworkInterfaceAttributeVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    source_dest_check: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceDestCheck', 'style': 'form', 'explode': True }})
    

@dataclass
class GetResetNetworkInterfaceAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResetNetworkInterfaceAttributeRequest:
    headers: GetResetNetworkInterfaceAttributeHeaders = field()
    query_params: GetResetNetworkInterfaceAttributeQueryParams = field()
    

@dataclass
class GetResetNetworkInterfaceAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    
