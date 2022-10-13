from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchGetDeploymentGroupsInput:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    deployment_group_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentGroupNames' }})
    
