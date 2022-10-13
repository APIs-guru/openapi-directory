from dataclasses import dataclass, field



@dataclass
class TranslationSetsDeleteTranslationSetAttributePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsDeleteTranslationSetAttributeRequest:
    path_params: TranslationSetsDeleteTranslationSetAttributePathParams = field(default=None)
    

@dataclass
class TranslationSetsDeleteTranslationSetAttributeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
