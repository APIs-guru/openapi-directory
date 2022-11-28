from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class RunScheduledInstancesResult:
    r"""RunScheduledInstancesResult
    Contains the output of RunScheduledInstances.
    """
    
    instance_id_set: Optional[List[str]] = field(default=None)
    
