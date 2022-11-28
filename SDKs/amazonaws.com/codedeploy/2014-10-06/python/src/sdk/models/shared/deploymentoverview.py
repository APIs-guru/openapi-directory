from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeploymentOverview:
    r"""DeploymentOverview
    Information about the deployment status of the instances in the deployment.
    """
    
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Failed') }})
    in_progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InProgress') }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pending') }})
    ready: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ready') }})
    skipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Skipped') }})
    succeeded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Succeeded') }})
    
