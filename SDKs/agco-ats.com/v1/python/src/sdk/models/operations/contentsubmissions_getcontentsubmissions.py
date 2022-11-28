from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentSubmissionsGetContentSubmissionsQueryParams:
    content_definition_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'contentDefinitionID', 'style': 'form', 'explode': True }})
    include_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeAttributes', 'style': 'form', 'explode': True }})
    include_definition: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDefinition', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    release_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'releaseID', 'style': 'form', 'explode': True }})
    type_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'typeID', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userID', 'style': 'form', 'explode': True }})
    version: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentSubmissionsGetContentSubmissionsRequest:
    query_params: ContentSubmissionsGetContentSubmissionsQueryParams = field()
    

@dataclass
class ContentSubmissionsGetContentSubmissionsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_content_submission_shared_business_entities_content_submission_: Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission] = field(default=None)
    
