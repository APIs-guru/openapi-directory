from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class InitiateMultipartUploadPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    vault_name: str = field(default=None, metadata={'path_param': { 'field_name': 'vaultName', 'style': 'simple', 'explode': False }})
    

@dataclass
class InitiateMultipartUploadHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_archive_description: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-archive-description' }})
    x_amz_part_size: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-part-size' }})
    

@dataclass
class InitiateMultipartUploadRequest:
    path_params: InitiateMultipartUploadPathParams = field(default=None)
    headers: InitiateMultipartUploadHeaders = field(default=None)
    

@dataclass
class InitiateMultipartUploadResponse:
    content_type: str = field(default=None)
    initiate_multipart_upload_output: Optional[dict[str, Any]] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    missing_parameter_value_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
