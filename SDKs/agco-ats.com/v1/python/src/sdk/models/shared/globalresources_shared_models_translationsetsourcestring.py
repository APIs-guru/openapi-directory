from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsTranslationSetSourceString:
    description_for_translator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DescriptionForTranslator' }})
    language_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageID' }})
    string_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StringID' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StringValue' }})
    
