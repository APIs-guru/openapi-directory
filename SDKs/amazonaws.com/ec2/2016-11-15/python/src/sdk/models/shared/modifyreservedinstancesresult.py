from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ModifyReservedInstancesResult:
    r"""ModifyReservedInstancesResult
    Contains the output of ModifyReservedInstances.
    """
    
    reserved_instances_modification_id: Optional[str] = field(default=None)
    
