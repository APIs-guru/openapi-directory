from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OasSupportSharedModelsTranslationKey:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }, 'form': { 'field_name': 'ID' }})
    key_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyName' }, 'form': { 'field_name': 'KeyName' }})
    string_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StringID' }, 'form': { 'field_name': 'StringID' }})
    
