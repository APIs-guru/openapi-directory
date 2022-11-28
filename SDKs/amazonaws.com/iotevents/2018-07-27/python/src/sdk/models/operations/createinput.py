from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateInputHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateInputRequestBodyInputDefinition:
    r"""CreateInputRequestBodyInputDefinition
    The definition of the input.
    """
    
    attributes: Optional[List[shared.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclass_json
@dataclass
class CreateInputRequestBody:
    input_definition: CreateInputRequestBodyInputDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDefinition') }})
    input_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputName') }})
    input_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDescription') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateInputRequest:
    headers: CreateInputHeaders = field()
    request: CreateInputRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateInputResponse:
    content_type: str = field()
    status_code: int = field()
    create_input_response: Optional[shared.CreateInputResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
