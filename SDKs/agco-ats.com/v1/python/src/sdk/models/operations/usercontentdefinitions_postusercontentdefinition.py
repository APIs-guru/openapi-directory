from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserContentDefinitionsPostUserContentDefinitionRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    content_submission_shared_business_entities_user_content_definition: Optional[shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_user_content_definition1: Optional[shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_user_content_definition2: Optional[shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UserContentDefinitionsPostUserContentDefinitionRequest:
    request: UserContentDefinitionsPostUserContentDefinitionRequests = field()
    

@dataclass
class UserContentDefinitionsPostUserContentDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    user_content_definitions_post_user_content_definition_200_application_json_int32_integer: Optional[int] = field(default=None)
    user_content_definitions_post_user_content_definition_200_text_json_int32_integer: Optional[int] = field(default=None)
    
