from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentDefinitionsGetContentDefinitionsQueryParams:
    include_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeAttributes', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userID', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentDefinitionsGetContentDefinitionsRequest:
    query_params: ContentDefinitionsGetContentDefinitionsQueryParams = field()
    

@dataclass
class ContentDefinitionsGetContentDefinitionsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_content_submission_shared_business_entities_content_definition_: Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition] = field(default=None)
    
