from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV2AuthorizationCodeDefinitionsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2AuthorizationCodeDefinitionsIDRequest:
    path_params: GetAPIV2AuthorizationCodeDefinitionsIDPathParams = field(default=None)
    

@dataclass
class GetAPIV2AuthorizationCodeDefinitionsIDResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    authorization_codes_shared_models_authorization_code_definition: Optional[shared.AuthorizationCodesSharedModelsAuthorizationCodeDefinition] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
