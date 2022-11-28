from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class InitiateMultipartUploadPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    vault_name: str = field(metadata={'path_param': { 'field_name': 'vaultName', 'style': 'simple', 'explode': False }})
    

@dataclass
class InitiateMultipartUploadHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_archive_description: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-archive-description', 'style': 'simple', 'explode': False }})
    x_amz_part_size: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-part-size', 'style': 'simple', 'explode': False }})
    

@dataclass
class InitiateMultipartUploadRequest:
    headers: InitiateMultipartUploadHeaders = field()
    path_params: InitiateMultipartUploadPathParams = field()
    

@dataclass
class InitiateMultipartUploadResponse:
    content_type: str = field()
    status_code: int = field()
    initiate_multipart_upload_output: Optional[dict[str, Any]] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    missing_parameter_value_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    
