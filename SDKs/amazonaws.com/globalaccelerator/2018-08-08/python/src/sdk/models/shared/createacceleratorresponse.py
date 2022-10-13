from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accelerator


@dataclass_json
@dataclass
class CreateAcceleratorResponse:
    accelerator: Optional[accelerator.Accelerator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Accelerator' }})
    
