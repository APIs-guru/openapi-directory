from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assessmentcontrolset
from . import frameworkmetadata


@dataclass_json
@dataclass
class AssessmentFramework:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    control_sets: Optional[List[assessmentcontrolset.AssessmentControlSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlSets' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata: Optional[frameworkmetadata.FrameworkMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
