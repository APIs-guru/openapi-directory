from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StringDefinitionsGetDefinitionPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class StringDefinitionsGetDefinitionQueryParams:
    include_deleted_languages: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDeletedLanguages', 'style': 'form', 'explode': True }})
    include_translations: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeTranslations', 'style': 'form', 'explode': True }})
    language_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageIds', 'style': 'form', 'explode': True }})
    

@dataclass
class StringDefinitionsGetDefinitionRequest:
    path_params: StringDefinitionsGetDefinitionPathParams = field()
    query_params: StringDefinitionsGetDefinitionQueryParams = field()
    

@dataclass
class StringDefinitionsGetDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    global_resources_shared_models_string_definition: Optional[shared.GlobalResourcesSharedModelsStringDefinition] = field(default=None)
    
