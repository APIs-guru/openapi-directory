from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import settings


@dataclass_json
@dataclass
class UpdateSettingsResponse:
    settings: Optional[settings.Settings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
