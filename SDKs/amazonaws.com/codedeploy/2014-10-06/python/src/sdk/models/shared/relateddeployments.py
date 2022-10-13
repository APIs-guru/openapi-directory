from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RelatedDeployments:
    auto_update_outdated_instances_deployment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoUpdateOutdatedInstancesDeploymentIds' }})
    auto_update_outdated_instances_root_deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoUpdateOutdatedInstancesRootDeploymentId' }})
    
