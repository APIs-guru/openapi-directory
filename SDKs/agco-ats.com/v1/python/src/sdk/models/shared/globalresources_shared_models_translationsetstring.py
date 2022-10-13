from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsTranslationSetString:
    language_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageID' }, 'form': { 'field_name': 'LanguageID' }})
    string_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StringID' }, 'form': { 'field_name': 'StringID' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StringValue' }, 'form': { 'field_name': 'StringValue' }})
    translation_set_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranslationSetId' }, 'form': { 'field_name': 'TranslationSetId' }})
    
