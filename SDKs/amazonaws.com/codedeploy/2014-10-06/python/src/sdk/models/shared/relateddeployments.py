from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RelatedDeployments:
    r"""RelatedDeployments
    Information about deployments related to the specified deployment.
    """
    
    auto_update_outdated_instances_deployment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoUpdateOutdatedInstancesDeploymentIds') }})
    auto_update_outdated_instances_root_deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoUpdateOutdatedInstancesRootDeploymentId') }})
    
