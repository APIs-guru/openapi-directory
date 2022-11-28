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
class PutIntegrationResponsePathParams:
    http_method: str = field(metadata={'path_param': { 'field_name': 'http_method', 'style': 'simple', 'explode': False }})
    resource_id: str = field(metadata={'path_param': { 'field_name': 'resource_id', 'style': 'simple', 'explode': False }})
    restapi_id: str = field(metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    status_code: str = field(metadata={'path_param': { 'field_name': 'status_code', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutIntegrationResponseHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class PutIntegrationResponseRequestBodyContentHandlingEnum(str, Enum):
    CONVERT_TO_BINARY = "CONVERT_TO_BINARY"
    CONVERT_TO_TEXT = "CONVERT_TO_TEXT"


@dataclass_json
@dataclass
class PutIntegrationResponseRequestBody:
    content_handling: Optional[PutIntegrationResponseRequestBodyContentHandlingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentHandling') }})
    response_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseParameters') }})
    response_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseTemplates') }})
    selection_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionPattern') }})
    

@dataclass
class PutIntegrationResponseRequest:
    headers: PutIntegrationResponseHeaders = field()
    path_params: PutIntegrationResponsePathParams = field()
    request: PutIntegrationResponseRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutIntegrationResponseResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    integration_response: Optional[shared.IntegrationResponse] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
