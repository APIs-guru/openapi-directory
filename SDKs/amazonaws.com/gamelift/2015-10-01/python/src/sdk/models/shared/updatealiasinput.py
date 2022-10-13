from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import routingstrategy


@dataclass_json
@dataclass
class UpdateAliasInput:
    alias_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    routing_strategy: Optional[routingstrategy.RoutingStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingStrategy' }})
    
