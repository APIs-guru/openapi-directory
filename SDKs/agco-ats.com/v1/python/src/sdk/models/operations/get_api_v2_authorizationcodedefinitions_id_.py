from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV2AuthorizationCodeDefinitionsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2AuthorizationCodeDefinitionsIDRequest:
    path_params: GetAPIV2AuthorizationCodeDefinitionsIDPathParams = field()
    

@dataclass
class GetAPIV2AuthorizationCodeDefinitionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    authorization_codes_shared_models_authorization_code_definition: Optional[shared.AuthorizationCodesSharedModelsAuthorizationCodeDefinition] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
