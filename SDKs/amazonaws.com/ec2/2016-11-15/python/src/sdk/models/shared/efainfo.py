from dataclasses import dataclass, field
from typing import Optional


@dataclass
class EfaInfo:
    r"""EfaInfo
    Describes the Elastic Fabric Adapters for the instance type.
    """
    
    maximum_efa_interfaces: Optional[int] = field(default=None)
    
