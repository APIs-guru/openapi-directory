from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetImportClientVpnClientCertificateRevocationListActionEnum(str, Enum):
    IMPORT_CLIENT_VPN_CLIENT_CERTIFICATE_REVOCATION_LIST = "ImportClientVpnClientCertificateRevocationList"

class GetImportClientVpnClientCertificateRevocationListVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetImportClientVpnClientCertificateRevocationListQueryParams:
    action: GetImportClientVpnClientCertificateRevocationListActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    certificate_revocation_list: str = field(default=None, metadata={'query_param': { 'field_name': 'CertificateRevocationList', 'style': 'form', 'explode': True }})
    client_vpn_endpoint_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ClientVpnEndpointId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    version: GetImportClientVpnClientCertificateRevocationListVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetImportClientVpnClientCertificateRevocationListHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImportClientVpnClientCertificateRevocationListRequest:
    query_params: GetImportClientVpnClientCertificateRevocationListQueryParams = field(default=None)
    headers: GetImportClientVpnClientCertificateRevocationListHeaders = field(default=None)
    

@dataclass
class GetImportClientVpnClientCertificateRevocationListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
