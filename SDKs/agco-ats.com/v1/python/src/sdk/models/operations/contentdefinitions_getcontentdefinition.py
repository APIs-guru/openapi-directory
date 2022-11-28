from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentDefinitionsGetContentDefinitionPathParams:
    content_definition_id: int = field(metadata={'path_param': { 'field_name': 'contentDefinitionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentDefinitionsGetContentDefinitionQueryParams:
    include_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeAttributes', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentDefinitionsGetContentDefinitionRequest:
    path_params: ContentDefinitionsGetContentDefinitionPathParams = field()
    query_params: ContentDefinitionsGetContentDefinitionQueryParams = field()
    

@dataclass
class ContentDefinitionsGetContentDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    content_submission_shared_business_entities_content_definition: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinition] = field(default=None)
    
