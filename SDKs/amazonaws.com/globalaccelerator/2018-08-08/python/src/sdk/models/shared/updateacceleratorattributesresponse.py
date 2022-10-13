from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import acceleratorattributes


@dataclass_json
@dataclass
class UpdateAcceleratorAttributesResponse:
    accelerator_attributes: Optional[acceleratorattributes.AcceleratorAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorAttributes' }})
    
