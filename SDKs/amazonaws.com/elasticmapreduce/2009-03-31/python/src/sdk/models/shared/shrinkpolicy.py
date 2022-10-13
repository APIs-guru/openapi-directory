from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instanceresizepolicy


@dataclass_json
@dataclass
class ShrinkPolicy:
    decommission_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DecommissionTimeout' }})
    instance_resize_policy: Optional[instanceresizepolicy.InstanceResizePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceResizePolicy' }})
    
