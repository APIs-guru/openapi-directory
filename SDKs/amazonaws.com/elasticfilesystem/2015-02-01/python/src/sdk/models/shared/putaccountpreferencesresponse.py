from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourceidpreference


@dataclass_json
@dataclass
class PutAccountPreferencesResponse:
    resource_id_preference: Optional[resourceidpreference.ResourceIDPreference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceIdPreference' }})
    
