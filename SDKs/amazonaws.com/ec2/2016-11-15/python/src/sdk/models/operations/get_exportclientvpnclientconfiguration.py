from dataclasses import dataclass, field
from typing import Enum,Optional

class GetExportClientVpnClientConfigurationActionEnum(str, Enum):
    EXPORT_CLIENT_VPN_CLIENT_CONFIGURATION = "ExportClientVpnClientConfiguration"

class GetExportClientVpnClientConfigurationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetExportClientVpnClientConfigurationQueryParams:
    action: GetExportClientVpnClientConfigurationActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    client_vpn_endpoint_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ClientVpnEndpointId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    version: GetExportClientVpnClientConfigurationVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportClientVpnClientConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportClientVpnClientConfigurationRequest:
    query_params: GetExportClientVpnClientConfigurationQueryParams = field(default=None)
    headers: GetExportClientVpnClientConfigurationHeaders = field(default=None)
    

@dataclass
class GetExportClientVpnClientConfigurationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
