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
    <p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html\">Use Lambda Function as Authorizer</a> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html\">Use Cognito User Pool as Authorizer</a> </div>
    """
    
    auth_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authType') }})
    authorizer_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerCredentials') }})
    authorizer_result_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerResultTtlInSeconds') }})
    authorizer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerUri') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    identity_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identitySource') }})
    identity_validation_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityValidationExpression') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    provider_ar_ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerARNs') }})
    type: Optional[AuthorizerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
