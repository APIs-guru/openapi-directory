from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TransferCertificatePathParams:
    certificate_id: str = field(default=None, metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TransferCertificateQueryParams:
    target_aws_account: str = field(default=None, metadata={'query_param': { 'field_name': 'targetAwsAccount', 'style': 'form', 'explode': True }})
    

@dataclass
class TransferCertificateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class TransferCertificateRequestBody:
    transfer_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferMessage' }})
    

@dataclass
class TransferCertificateRequest:
    path_params: TransferCertificatePathParams = field(default=None)
    query_params: TransferCertificateQueryParams = field(default=None)
    headers: TransferCertificateHeaders = field(default=None)
    request: TransferCertificateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TransferCertificateResponse:
    certificate_state_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    transfer_certificate_response: Optional[shared.TransferCertificateResponse] = field(default=None)
    transfer_conflict_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
