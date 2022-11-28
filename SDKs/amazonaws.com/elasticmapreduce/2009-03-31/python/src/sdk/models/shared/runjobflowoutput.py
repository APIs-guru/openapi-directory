from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RunJobFlowOutput:
    r"""RunJobFlowOutput
     The result of the <a>RunJobFlow</a> operation. 
    """
    
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterArn') }})
    job_flow_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobFlowId') }})
    
