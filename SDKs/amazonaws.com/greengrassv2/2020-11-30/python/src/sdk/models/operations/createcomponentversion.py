from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateComponentVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateComponentVersionRequestBodyLambdaFunction:
    component_dependencies: Optional[dict[str, shared.ComponentDependencyRequirement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentDependencies' }})
    component_lambda_parameters: Optional[shared.LambdaExecutionParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentLambdaParameters' }})
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentName' }})
    component_platforms: Optional[List[shared.ComponentPlatform]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentPlatforms' }})
    component_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentVersion' }})
    lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaArn' }})
    

@dataclass_json
@dataclass
class CreateComponentVersionRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    inline_recipe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineRecipe' }})
    lambda_function: Optional[CreateComponentVersionRequestBodyLambdaFunction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunction' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateComponentVersionRequest:
    headers: CreateComponentVersionHeaders = field(default=None)
    request: CreateComponentVersionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateComponentVersionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_component_version_response: Optional[shared.CreateComponentVersionResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    request_already_in_progress_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
