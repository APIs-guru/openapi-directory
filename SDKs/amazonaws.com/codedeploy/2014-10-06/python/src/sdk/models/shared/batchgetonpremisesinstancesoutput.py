from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instanceinfo


@dataclass_json
@dataclass
class BatchGetOnPremisesInstancesOutput:
    instance_infos: Optional[List[instanceinfo.InstanceInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceInfos' }})
    
