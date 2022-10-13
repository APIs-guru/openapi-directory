from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationcomponent


@dataclass_json
@dataclass
class ListComponentsResponse:
    application_component_list: Optional[List[applicationcomponent.ApplicationComponent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationComponentList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
