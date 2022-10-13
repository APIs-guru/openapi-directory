from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import layerfailure
from . import layer


@dataclass_json
@dataclass
class BatchCheckLayerAvailabilityResponse:
    failures: Optional[List[layerfailure.LayerFailure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    layers: Optional[List[layer.Layer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layers' }})
    
