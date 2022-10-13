from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import encryption


@dataclass_json
@dataclass
class JobWatermark:
    encryption: Optional[encryption.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encryption' }})
    input_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputKey' }})
    preset_watermark_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PresetWatermarkId' }})
    
