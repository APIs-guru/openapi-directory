from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BulkDeployment:
    r"""BulkDeployment
    Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
    """
    
    bulk_deployment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BulkDeploymentArn') }})
    bulk_deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BulkDeploymentId') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    
