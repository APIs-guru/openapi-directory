from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Authorizer:
    r"""Authorizer
    Represents an authorizer.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    authorizer_credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizerCredentialsArn') }})
    authorizer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizerId') }})
    authorizer_payload_format_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizerPayloadFormatVersion') }})
    authorizer_result_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizerResultTtlInSeconds') }})
    authorizer_type: Optional[AuthorizerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizerType') }})
    authorizer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizerUri') }})
    enable_simple_responses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableSimpleResponses') }})
    identity_source: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentitySource') }})
    identity_validation_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityValidationExpression') }})
    jwt_configuration: Optional[JwtConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JwtConfiguration') }})
    
