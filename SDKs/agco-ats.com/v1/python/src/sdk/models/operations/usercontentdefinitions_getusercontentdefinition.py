from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserContentDefinitionsGetUserContentDefinitionPathParams:
    user_content_definition_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userContentDefinitionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserContentDefinitionsGetUserContentDefinitionRequest:
    path_params: UserContentDefinitionsGetUserContentDefinitionPathParams = field(default=None)
    

@dataclass
class UserContentDefinitionsGetUserContentDefinitionResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_submission_shared_business_entities_user_content_definition: Optional[shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
