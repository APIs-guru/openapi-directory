from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LambdaAuthorizerConfig:
    r"""LambdaAuthorizerConfig
    A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
    """
    
    authorizer_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerUri') }})
    authorizer_result_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerResultTtlInSeconds') }})
    identity_validation_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityValidationExpression') }})
    
