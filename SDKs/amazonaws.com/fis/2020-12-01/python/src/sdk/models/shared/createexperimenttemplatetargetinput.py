from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import experimenttemplatetargetinputfilter


@dataclass_json
@dataclass
class CreateExperimentTemplateTargetInput:
    filters: Optional[List[experimenttemplatetargetinputfilter.ExperimentTemplateTargetInputFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    resource_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArns' }})
    resource_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceTags' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    selection_mode: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionMode' }})
    
