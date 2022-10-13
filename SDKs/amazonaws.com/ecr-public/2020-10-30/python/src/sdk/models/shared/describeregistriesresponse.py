from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import registry


@dataclass_json
@dataclass
class DescribeRegistriesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    registries: List[registry.Registry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registries' }})
    
