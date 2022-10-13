from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LambdaAuthorizerConfig:
    authorizer_result_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerResultTtlInSeconds' }})
    authorizer_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerUri' }})
    identity_validation_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityValidationExpression' }})
    
