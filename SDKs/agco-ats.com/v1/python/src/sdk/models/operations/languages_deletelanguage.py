from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LanguagesDeleteLanguagePathParams:
    locale_id: int = field(metadata={'path_param': { 'field_name': 'LocaleID', 'style': 'simple', 'explode': False }})
    

@dataclass
class LanguagesDeleteLanguageRequest:
    path_params: LanguagesDeleteLanguagePathParams = field()
    

@dataclass
class LanguagesDeleteLanguageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
