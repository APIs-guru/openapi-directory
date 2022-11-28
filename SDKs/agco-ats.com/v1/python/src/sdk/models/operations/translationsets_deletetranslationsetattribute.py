from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TranslationSetsDeleteTranslationSetAttributePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsDeleteTranslationSetAttributeRequest:
    path_params: TranslationSetsDeleteTranslationSetAttributePathParams = field()
    

@dataclass
class TranslationSetsDeleteTranslationSetAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
