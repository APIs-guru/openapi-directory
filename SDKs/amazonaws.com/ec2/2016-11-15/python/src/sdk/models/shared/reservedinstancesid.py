from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReservedInstancesID:
    r"""ReservedInstancesID
    Describes the ID of a Reserved Instance.
    """
    
    reserved_instances_id: Optional[str] = field(default=None)
    
