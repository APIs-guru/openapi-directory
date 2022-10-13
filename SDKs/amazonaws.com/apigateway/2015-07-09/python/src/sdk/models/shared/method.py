from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import integration
from . import methodresponse


@dataclass_json
@dataclass
class Method:
    api_key_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyRequired' }})
    authorization_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationScopes' }})
    authorization_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationType' }})
    authorizer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerId' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpMethod' }})
    method_integration: Optional[integration.Integration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodIntegration' }})
    method_responses: Optional[dict[str, methodresponse.MethodResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodResponses' }})
    operation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationName' }})
    request_models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestModels' }})
    request_parameters: Optional[dict[str, bool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestParameters' }})
    request_validator_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestValidatorId' }})
    
