from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class StartAttachmentUploadHeaders:
    x_amz_bearer: str = field(metadata={'header': { 'field_name': 'X-Amz-Bearer', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StartAttachmentUploadRequestBody:
    attachment_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachmentName') }})
    attachment_size_in_bytes: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachmentSizeInBytes') }})
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    content_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentType') }})
    

@dataclass
class StartAttachmentUploadRequest:
    headers: StartAttachmentUploadHeaders = field()
    request: StartAttachmentUploadRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartAttachmentUploadResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    start_attachment_upload_response: Optional[shared.StartAttachmentUploadResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
