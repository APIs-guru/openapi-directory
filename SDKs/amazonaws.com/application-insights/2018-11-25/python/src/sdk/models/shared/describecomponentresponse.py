from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationcomponent


@dataclass_json
@dataclass
class DescribeComponentResponse:
    application_component: Optional[applicationcomponent.ApplicationComponent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationComponent' }})
    resource_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceList' }})
    
