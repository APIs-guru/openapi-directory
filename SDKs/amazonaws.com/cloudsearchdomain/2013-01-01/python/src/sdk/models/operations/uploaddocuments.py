from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class UploadDocumentsFormatEnum(str, Enum):
    SDK = "sdk"


@dataclass
class UploadDocumentsQueryParams:
    format: UploadDocumentsFormatEnum = field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    
class UploadDocumentsContentTypeEnum(str, Enum):
    APPLICATION_JSON = "application/json"
    APPLICATION_XML = "application/xml"


@dataclass
class UploadDocumentsHeaders:
    content_type: UploadDocumentsContentTypeEnum = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UploadDocumentsRequestBody:
    documents: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    

@dataclass
class UploadDocumentsRequest:
    headers: UploadDocumentsHeaders = field()
    query_params: UploadDocumentsQueryParams = field()
    request: UploadDocumentsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UploadDocumentsResponse:
    content_type: str = field()
    status_code: int = field()
    document_service_exception: Optional[shared.DocumentServiceException] = field(default=None)
    upload_documents_response: Optional[shared.UploadDocumentsResponse] = field(default=None)
    
