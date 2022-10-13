from dataclasses import dataclass, field



@dataclass
class LanguagesDeleteLanguagePathParams:
    locale_id: int = field(default=None, metadata={'path_param': { 'field_name': 'LocaleID', 'style': 'simple', 'explode': False }})
    

@dataclass
class LanguagesDeleteLanguageRequest:
    path_params: LanguagesDeleteLanguagePathParams = field(default=None)
    

@dataclass
class LanguagesDeleteLanguageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
