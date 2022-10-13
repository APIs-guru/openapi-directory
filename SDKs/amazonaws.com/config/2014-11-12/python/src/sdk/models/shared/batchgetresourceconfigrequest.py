from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import resourcekey


@dataclass_json
@dataclass
class BatchGetResourceConfigRequest:
    resource_keys: List[resourcekey.ResourceKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceKeys' }})
    
