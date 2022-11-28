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
class CreateIntegrationResponsePathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    integration_id: str = field(metadata={'path_param': { 'field_name': 'integrationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateIntegrationResponseHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum(str, Enum):
    CONVERT_TO_BINARY = "CONVERT_TO_BINARY"
    CONVERT_TO_TEXT = "CONVERT_TO_TEXT"


@dataclass_json
@dataclass
class CreateIntegrationResponseRequestBody:
    integration_response_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationResponseKey') }})
    content_handling_strategy: Optional[CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentHandlingStrategy') }})
    response_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseParameters') }})
    response_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseTemplates') }})
    template_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateSelectionExpression') }})
    

@dataclass
class CreateIntegrationResponseRequest:
    headers: CreateIntegrationResponseHeaders = field()
    path_params: CreateIntegrationResponsePathParams = field()
    request: CreateIntegrationResponseRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateIntegrationResponseResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_integration_response_response: Optional[shared.CreateIntegrationResponseResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
