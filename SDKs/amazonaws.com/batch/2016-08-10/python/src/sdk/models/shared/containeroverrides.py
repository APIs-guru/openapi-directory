from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyvaluepair
from . import resourcerequirement


@dataclass_json
@dataclass
class ContainerOverrides:
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    environment: Optional[List[keyvaluepair.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    resource_requirements: Optional[List[resourcerequirement.ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRequirements' }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcpus' }})
    
