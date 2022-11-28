from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentDefinitionsGetContentDefinitionAttributesPathParams:
    content_definition_id: int = field(metadata={'path_param': { 'field_name': 'contentDefinitionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentDefinitionsGetContentDefinitionAttributesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentDefinitionsGetContentDefinitionAttributesRequest:
    path_params: ContentDefinitionsGetContentDefinitionAttributesPathParams = field()
    query_params: ContentDefinitionsGetContentDefinitionAttributesQueryParams = field()
    

@dataclass
class ContentDefinitionsGetContentDefinitionAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_content_submission_shared_business_entities_content_definition_attribute_: Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None)
    
