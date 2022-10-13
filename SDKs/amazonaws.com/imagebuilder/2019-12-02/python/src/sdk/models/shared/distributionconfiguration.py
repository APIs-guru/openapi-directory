from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import distribution


@dataclass_json
@dataclass
class DistributionConfiguration:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateUpdated' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    distributions: Optional[List[distribution.Distribution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributions' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    timeout_minutes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutMinutes' }})
    
