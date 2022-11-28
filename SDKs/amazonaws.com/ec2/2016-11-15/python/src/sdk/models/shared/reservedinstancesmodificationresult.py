from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ReservedInstancesModificationResult:
    r"""ReservedInstancesModificationResult
    Describes the modification request/s.
    """
    
    reserved_instances_id: Optional[str] = field(default=None)
    target_configuration: Optional[ReservedInstancesConfiguration] = field(default=None)
    
