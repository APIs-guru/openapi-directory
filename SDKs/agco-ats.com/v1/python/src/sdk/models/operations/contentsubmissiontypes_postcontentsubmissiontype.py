from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentSubmissionTypesPostContentSubmissionTypeRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    content_submission_shared_business_entities_content_submission_type: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_submission_type1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_submission_type2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ContentSubmissionTypesPostContentSubmissionTypeRequest:
    request: ContentSubmissionTypesPostContentSubmissionTypeRequests = field(default=None)
    

@dataclass
class ContentSubmissionTypesPostContentSubmissionTypeResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_submission_types_post_content_submission_type_200_application_json_int32_integer: Optional[int] = field(default=None)
    content_submission_types_post_content_submission_type_200_text_json_int32_integer: Optional[int] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
