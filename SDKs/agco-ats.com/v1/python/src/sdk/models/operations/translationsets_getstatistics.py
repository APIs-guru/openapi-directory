from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationSetsGetStatisticsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsGetStatisticsRequest:
    path_params: TranslationSetsGetStatisticsPathParams = field()
    

@dataclass
class TranslationSetsGetStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    global_resources_shared_models_translation_set_statistics: Optional[shared.GlobalResourcesSharedModelsTranslationSetStatistics] = field(default=None)
    
