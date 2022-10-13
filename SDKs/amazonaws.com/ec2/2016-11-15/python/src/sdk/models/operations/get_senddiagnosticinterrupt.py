from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSendDiagnosticInterruptActionEnum(str, Enum):
    SEND_DIAGNOSTIC_INTERRUPT = "SendDiagnosticInterrupt"

class GetSendDiagnosticInterruptVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetSendDiagnosticInterruptQueryParams:
    action: GetSendDiagnosticInterruptActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    instance_id: str = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    version: GetSendDiagnosticInterruptVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSendDiagnosticInterruptHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetSendDiagnosticInterruptRequest:
    query_params: GetSendDiagnosticInterruptQueryParams = field(default=None)
    headers: GetSendDiagnosticInterruptHeaders = field(default=None)
    

@dataclass
class GetSendDiagnosticInterruptResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
