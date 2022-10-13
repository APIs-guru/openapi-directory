from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customroutingaccelerator


@dataclass_json
@dataclass
class DescribeCustomRoutingAcceleratorResponse:
    accelerator: Optional[customroutingaccelerator.CustomRoutingAccelerator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Accelerator' }})
    
