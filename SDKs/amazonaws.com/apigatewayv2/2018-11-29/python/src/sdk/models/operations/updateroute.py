from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateRoutePathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    route_id: str = field(default=None, metadata={'path_param': { 'field_name': 'routeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRouteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateRouteRequestBodyAuthorizationTypeEnum(str, Enum):
    NONE = "NONE"
    AWS_IAM = "AWS_IAM"
    CUSTOM = "CUSTOM"
    JWT = "JWT"


@dataclass_json
@dataclass
class UpdateRouteRequestBody:
    api_key_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyRequired' }})
    authorization_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationScopes' }})
    authorization_type: Optional[UpdateRouteRequestBodyAuthorizationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationType' }})
    authorizer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerId' }})
    model_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelSelectionExpression' }})
    operation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationName' }})
    request_models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestModels' }})
    request_parameters: Optional[dict[str, shared.ParameterConstraints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestParameters' }})
    route_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeKey' }})
    route_response_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeResponseSelectionExpression' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    

@dataclass
class UpdateRouteRequest:
    path_params: UpdateRoutePathParams = field(default=None)
    headers: UpdateRouteHeaders = field(default=None)
    request: UpdateRouteRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRouteResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_route_result: Optional[shared.UpdateRouteResult] = field(default=None)
    
