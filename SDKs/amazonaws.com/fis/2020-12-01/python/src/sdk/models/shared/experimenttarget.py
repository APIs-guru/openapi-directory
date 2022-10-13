from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import experimenttargetfilter


@dataclass_json
@dataclass
class ExperimentTarget:
    filters: Optional[List[experimenttargetfilter.ExperimentTargetFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    resource_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArns' }})
    resource_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceTags' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    selection_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionMode' }})
    
