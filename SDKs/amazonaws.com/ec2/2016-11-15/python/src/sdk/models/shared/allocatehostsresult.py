from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class AllocateHostsResult:
    r"""AllocateHostsResult
    Contains the output of AllocateHosts.
    """
    
    host_ids: Optional[List[str]] = field(default=None)
    
