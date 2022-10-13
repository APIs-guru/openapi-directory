from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authorizertype_enum
from . import jwtconfiguration


@dataclass_json
@dataclass
class CreateAuthorizerResponse:
    authorizer_credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizerCredentialsArn' }})
    authorizer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizerId' }})
    authorizer_payload_format_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizerPayloadFormatVersion' }})
    authorizer_result_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizerResultTtlInSeconds' }})
    authorizer_type: Optional[authorizertype_enum.AuthorizerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizerType' }})
    authorizer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizerUri' }})
    enable_simple_responses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableSimpleResponses' }})
    identity_source: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentitySource' }})
    identity_validation_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityValidationExpression' }})
    jwt_configuration: Optional[jwtconfiguration.JwtConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JwtConfiguration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
