from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import egressfilter


@dataclass_json
@dataclass
class MeshSpec:
    egress_filter: Optional[egressfilter.EgressFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egressFilter' }})
    
