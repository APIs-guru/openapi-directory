from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateComponentVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateComponentVersionRequestBodyLambdaFunction:
    r"""CreateComponentVersionRequestBodyLambdaFunction
    Contains information about an Lambda function to import to create a component.
    """
    
    component_dependencies: Optional[dict[str, shared.ComponentDependencyRequirement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentDependencies') }})
    component_lambda_parameters: Optional[shared.LambdaExecutionParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentLambdaParameters') }})
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentName') }})
    component_platforms: Optional[List[shared.ComponentPlatform]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentPlatforms') }})
    component_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersion') }})
    lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaArn') }})
    

@dataclass_json
@dataclass
class CreateComponentVersionRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    inline_recipe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineRecipe') }})
    lambda_function: Optional[CreateComponentVersionRequestBodyLambdaFunction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunction') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateComponentVersionRequest:
    headers: CreateComponentVersionHeaders = field()
    request: CreateComponentVersionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateComponentVersionResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_component_version_response: Optional[shared.CreateComponentVersionResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    request_already_in_progress_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
