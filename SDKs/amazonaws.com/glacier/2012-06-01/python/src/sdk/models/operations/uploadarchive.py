from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UploadArchivePathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    vault_name: str = field(metadata={'path_param': { 'field_name': 'vaultName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadArchiveHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_archive_description: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-archive-description', 'style': 'simple', 'explode': False }})
    x_amz_sha256_tree_hash: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-sha256-tree-hash', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UploadArchiveRequestBody:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass
class UploadArchiveRequest:
    headers: UploadArchiveHeaders = field()
    path_params: UploadArchivePathParams = field()
    request: UploadArchiveRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UploadArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    archive_creation_output: Optional[dict[str, Any]] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    missing_parameter_value_exception: Optional[Any] = field(default=None)
    request_timeout_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    
