from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionTypeArtifactDetails:
    maximum_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumCount' }})
    minimum_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumCount' }})
    
