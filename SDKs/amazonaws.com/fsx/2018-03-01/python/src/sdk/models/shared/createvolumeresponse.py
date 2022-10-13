from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import volume


@dataclass_json
@dataclass
class CreateVolumeResponse:
    volume: Optional[volume.Volume] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Volume' }})
    
