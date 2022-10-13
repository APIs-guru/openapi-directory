from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authorizertype_enum


@dataclass_json
@dataclass
class Authorizer:
    auth_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authType' }})
    authorizer_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerCredentials' }})
    authorizer_result_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerResultTtlInSeconds' }})
    authorizer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerUri' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identity_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identitySource' }})
    identity_validation_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityValidationExpression' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    provider_ar_ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerARNs' }})
    type: Optional[authorizertype_enum.AuthorizerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
