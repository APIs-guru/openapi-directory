from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentSubmissionsPostContentSubmissionAttributePathParams:
    content_submission_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contentSubmissionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionsPostContentSubmissionAttributeRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    content_submission_shared_business_entities_content_submission_attribute: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_submission_attribute1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_submission_attribute2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ContentSubmissionsPostContentSubmissionAttributeRequest:
    path_params: ContentSubmissionsPostContentSubmissionAttributePathParams = field(default=None)
    request: ContentSubmissionsPostContentSubmissionAttributeRequests = field(default=None)
    

@dataclass
class ContentSubmissionsPostContentSubmissionAttributeResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_submissions_post_content_submission_attribute_200_application_json_int32_integer: Optional[int] = field(default=None)
    content_submissions_post_content_submission_attribute_200_text_json_int32_integer: Optional[int] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
