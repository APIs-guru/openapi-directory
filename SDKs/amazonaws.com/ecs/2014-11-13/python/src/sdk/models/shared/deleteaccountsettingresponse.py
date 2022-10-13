from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import setting


@dataclass_json
@dataclass
class DeleteAccountSettingResponse:
    setting: Optional[setting.Setting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setting' }})
    
