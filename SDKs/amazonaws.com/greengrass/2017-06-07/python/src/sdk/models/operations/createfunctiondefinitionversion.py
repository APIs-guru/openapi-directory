from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateFunctionDefinitionVersionPathParams:
    function_definition_id: str = field(metadata={'path_param': { 'field_name': 'FunctionDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFunctionDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amzn_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateFunctionDefinitionVersionRequestBodyDefaultConfig:
    r"""CreateFunctionDefinitionVersionRequestBodyDefaultConfig
    The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
    """
    
    execution: Optional[shared.FunctionDefaultExecutionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Execution') }})
    

@dataclass_json
@dataclass
class CreateFunctionDefinitionVersionRequestBody:
    default_config: Optional[CreateFunctionDefinitionVersionRequestBodyDefaultConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultConfig') }})
    functions: Optional[List[shared.Function]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Functions') }})
    

@dataclass
class CreateFunctionDefinitionVersionRequest:
    headers: CreateFunctionDefinitionVersionHeaders = field()
    path_params: CreateFunctionDefinitionVersionPathParams = field()
    request: CreateFunctionDefinitionVersionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFunctionDefinitionVersionResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    create_function_definition_version_response: Optional[shared.CreateFunctionDefinitionVersionResponse] = field(default=None)
    
