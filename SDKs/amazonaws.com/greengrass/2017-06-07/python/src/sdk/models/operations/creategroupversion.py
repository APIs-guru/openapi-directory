from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateGroupVersionPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'GroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateGroupVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amzn_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token' }})
    

@dataclass_json
@dataclass
class CreateGroupVersionRequestBody:
    connector_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectorDefinitionVersionArn' }})
    core_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CoreDefinitionVersionArn' }})
    device_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceDefinitionVersionArn' }})
    function_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionDefinitionVersionArn' }})
    logger_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggerDefinitionVersionArn' }})
    resource_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceDefinitionVersionArn' }})
    subscription_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionDefinitionVersionArn' }})
    

@dataclass
class CreateGroupVersionRequest:
    path_params: CreateGroupVersionPathParams = field(default=None)
    headers: CreateGroupVersionHeaders = field(default=None)
    request: CreateGroupVersionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGroupVersionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_group_version_response: Optional[shared.CreateGroupVersionResponse] = field(default=None)
    status_code: int = field(default=None)
    
