from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StringDefinitionsGetDefinitionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class StringDefinitionsGetDefinitionQueryParams:
    include_deleted_languages: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDeletedLanguages', 'style': 'form', 'explode': True }})
    include_translations: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeTranslations', 'style': 'form', 'explode': True }})
    language_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageIds', 'style': 'form', 'explode': True }})
    

@dataclass
class StringDefinitionsGetDefinitionRequest:
    path_params: StringDefinitionsGetDefinitionPathParams = field(default=None)
    query_params: StringDefinitionsGetDefinitionQueryParams = field(default=None)
    

@dataclass
class StringDefinitionsGetDefinitionResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    global_resources_shared_models_string_definition: Optional[shared.GlobalResourcesSharedModelsStringDefinition] = field(default=None)
    status_code: int = field(default=None)
    
