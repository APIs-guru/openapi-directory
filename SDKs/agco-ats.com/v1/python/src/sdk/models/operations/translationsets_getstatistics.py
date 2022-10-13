from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationSetsGetStatisticsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsGetStatisticsRequest:
    path_params: TranslationSetsGetStatisticsPathParams = field(default=None)
    

@dataclass
class TranslationSetsGetStatisticsResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    global_resources_shared_models_translation_set_statistics: Optional[shared.GlobalResourcesSharedModelsTranslationSetStatistics] = field(default=None)
    status_code: int = field(default=None)
    
