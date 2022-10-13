from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsTranslationSetAttribute:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }, 'form': { 'field_name': 'ID' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }, 'form': { 'field_name': 'Name' }})
    translation_set_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranslationSetID' }, 'form': { 'field_name': 'TranslationSetID' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }, 'form': { 'field_name': 'Value' }})
    
