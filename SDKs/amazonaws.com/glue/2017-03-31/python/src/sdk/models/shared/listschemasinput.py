from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import registryid


@dataclass_json
@dataclass
class ListSchemasInput:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    registry_id: Optional[registryid.RegistryID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryId' }})
    
