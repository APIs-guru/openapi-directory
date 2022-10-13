from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StringDefinitionsGetDefinitionsQueryParams:
    description_text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'descriptionText', 'style': 'form', 'explode': True }})
    include_deleted_languages: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDeletedLanguages', 'style': 'form', 'explode': True }})
    include_translations: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeTranslations', 'style': 'form', 'explode': True }})
    language_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageIds', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    matching_translations_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'matchingTranslationsOnly', 'style': 'form', 'explode': True }})
    modified_after_timestamp: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modifiedAfterTimestamp', 'style': 'form', 'explode': True }})
    string_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'stringIds', 'style': 'form', 'explode': True }})
    string_text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'stringText', 'style': 'form', 'explode': True }})
    use_full_text: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useFullText', 'style': 'form', 'explode': True }})
    

@dataclass
class StringDefinitionsGetDefinitionsRequest:
    query_params: StringDefinitionsGetDefinitionsQueryParams = field(default=None)
    

@dataclass
class StringDefinitionsGetDefinitionsResponse:
    api_i_paged_response_global_resources_shared_models_string_definition_: Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsStringDefinition] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
