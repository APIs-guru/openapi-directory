from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentDefinitionsGetContentDefinitionPathParams:
    content_definition_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contentDefinitionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentDefinitionsGetContentDefinitionQueryParams:
    include_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeAttributes', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentDefinitionsGetContentDefinitionRequest:
    path_params: ContentDefinitionsGetContentDefinitionPathParams = field(default=None)
    query_params: ContentDefinitionsGetContentDefinitionQueryParams = field(default=None)
    

@dataclass
class ContentDefinitionsGetContentDefinitionResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_submission_shared_business_entities_content_definition: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinition] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
