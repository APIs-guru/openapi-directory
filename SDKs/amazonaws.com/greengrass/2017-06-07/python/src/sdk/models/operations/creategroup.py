from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateGroupHeaders:
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
class CreateGroupRequestBodyInitialVersion:
    r"""CreateGroupRequestBodyInitialVersion
    Information about a group version.
    """
    
    connector_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectorDefinitionVersionArn') }})
    core_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CoreDefinitionVersionArn') }})
    device_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceDefinitionVersionArn') }})
    function_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionDefinitionVersionArn') }})
    logger_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggerDefinitionVersionArn') }})
    resource_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceDefinitionVersionArn') }})
    subscription_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionDefinitionVersionArn') }})
    

@dataclass_json
@dataclass
class CreateGroupRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    initial_version: Optional[CreateGroupRequestBodyInitialVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialVersion') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateGroupRequest:
    headers: CreateGroupHeaders = field()
    request: CreateGroupRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGroupResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    create_group_response: Optional[shared.CreateGroupResponse] = field(default=None)
    
