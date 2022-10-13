from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import targetcontainerrepository


@dataclass_json
@dataclass
class ContainerDistributionConfiguration:
    container_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerTags' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    target_repository: targetcontainerrepository.TargetContainerRepository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetRepository' }})
    
