from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserContentDefinitionsGetUserContentDefinitionPathParams:
    user_content_definition_id: int = field(metadata={'path_param': { 'field_name': 'userContentDefinitionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserContentDefinitionsGetUserContentDefinitionRequest:
    path_params: UserContentDefinitionsGetUserContentDefinitionPathParams = field()
    

@dataclass
class UserContentDefinitionsGetUserContentDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    content_submission_shared_business_entities_user_content_definition: Optional[shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition] = field(default=None)
    
