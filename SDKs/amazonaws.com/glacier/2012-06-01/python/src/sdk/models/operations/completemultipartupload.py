from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CompleteMultipartUploadPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'uploadId', 'style': 'simple', 'explode': False }})
    vault_name: str = field(default=None, metadata={'path_param': { 'field_name': 'vaultName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteMultipartUploadHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_archive_size: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-archive-size', 'style': 'simple', 'explode': False }})
    x_amz_sha256_tree_hash: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-sha256-tree-hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteMultipartUploadRequest:
    path_params: CompleteMultipartUploadPathParams = field(default=None)
    headers: CompleteMultipartUploadHeaders = field(default=None)
    

@dataclass
class CompleteMultipartUploadResponse:
    archive_creation_output: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    missing_parameter_value_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
