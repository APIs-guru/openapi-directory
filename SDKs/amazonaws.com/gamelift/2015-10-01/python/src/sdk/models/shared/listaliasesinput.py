from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import routingstrategytype_enum


@dataclass_json
@dataclass
class ListAliasesInput:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    routing_strategy_type: Optional[routingstrategytype_enum.RoutingStrategyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingStrategyType' }})
    
