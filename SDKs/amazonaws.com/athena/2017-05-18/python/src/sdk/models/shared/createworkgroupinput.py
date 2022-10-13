from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workgroupconfiguration
from . import tag


@dataclass_json
@dataclass
class CreateWorkGroupInput:
    configuration: Optional[workgroupconfiguration.WorkGroupConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configuration' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
