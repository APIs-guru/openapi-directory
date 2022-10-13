from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceServerScopeType:
    scope_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScopeDescription' }})
    scope_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScopeName' }})
    
