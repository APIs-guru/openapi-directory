from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobflowdetail


@dataclass_json
@dataclass
class DescribeJobFlowsOutput:
    job_flows: Optional[List[jobflowdetail.JobFlowDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobFlows' }})
    
