from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deploymentgroupinfo


@dataclass_json
@dataclass
class GetDeploymentGroupOutput:
    deployment_group_info: Optional[deploymentgroupinfo.DeploymentGroupInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentGroupInfo' }})
    
