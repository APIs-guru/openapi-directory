from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customroutingacceleratorattributes


@dataclass_json
@dataclass
class UpdateCustomRoutingAcceleratorAttributesResponse:
    accelerator_attributes: Optional[customroutingacceleratorattributes.CustomRoutingAcceleratorAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorAttributes' }})
    
