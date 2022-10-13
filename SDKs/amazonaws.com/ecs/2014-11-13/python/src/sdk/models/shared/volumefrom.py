from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VolumeFrom:
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    source_container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceContainer' }})
    
