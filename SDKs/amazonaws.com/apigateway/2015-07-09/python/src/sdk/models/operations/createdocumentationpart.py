from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateDocumentationPartPathParams:
    restapi_id: str = field(metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDocumentationPartHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateDocumentationPartRequestBodyLocation:
    r"""CreateDocumentationPartRequestBodyLocation
    Specifies the target API entity to which the documentation applies.
    """
    
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    type: Optional[shared.DocumentationPartTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CreateDocumentationPartRequestBody:
    location: CreateDocumentationPartRequestBodyLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    properties: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

@dataclass
class CreateDocumentationPartRequest:
    headers: CreateDocumentationPartHeaders = field()
    path_params: CreateDocumentationPartPathParams = field()
    request: CreateDocumentationPartRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDocumentationPartResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    documentation_part: Optional[shared.DocumentationPart] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
