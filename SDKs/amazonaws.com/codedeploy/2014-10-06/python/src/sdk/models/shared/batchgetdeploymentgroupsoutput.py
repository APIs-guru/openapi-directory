from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deploymentgroupinfo


@dataclass_json
@dataclass
class BatchGetDeploymentGroupsOutput:
    deployment_groups_info: Optional[List[deploymentgroupinfo.DeploymentGroupInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentGroupsInfo' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    
