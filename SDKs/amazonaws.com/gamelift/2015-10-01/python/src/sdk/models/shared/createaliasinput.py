from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import routingstrategy
from . import tag


@dataclass_json
@dataclass
class CreateAliasInput:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    routing_strategy: routingstrategy.RoutingStrategy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingStrategy' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
