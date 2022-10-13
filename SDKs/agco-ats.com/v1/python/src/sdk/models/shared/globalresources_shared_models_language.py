from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsLanguage:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }, 'form': { 'field_name': 'Description' }})
    is_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsDeleted' }, 'form': { 'field_name': 'IsDeleted' }})
    locale_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocaleId' }, 'form': { 'field_name': 'LocaleId' }})
    
