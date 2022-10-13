from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import preset


@dataclass_json
@dataclass
class CreatePresetResponse:
    preset: Optional[preset.Preset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Preset' }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Warning' }})
    
