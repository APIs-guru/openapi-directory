from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyvaluepair
from . import environmentfile
from . import resourcerequirement


@dataclass_json
@dataclass
class ContainerOverride:
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    cpu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu' }})
    environment: Optional[List[keyvaluepair.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    environment_files: Optional[List[environmentfile.EnvironmentFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentFiles' }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    memory_reservation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryReservation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_requirements: Optional[List[resourcerequirement.ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRequirements' }})
    
