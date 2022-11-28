from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DescribeTerminationPolicyTypesAnswer:
    termination_policy_types: Optional[List[str]] = field(default=None)
    
