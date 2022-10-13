from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hsm


@dataclass_json
@dataclass
class CreateHsmResponse:
    hsm: Optional[hsm.Hsm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hsm' }})
    
