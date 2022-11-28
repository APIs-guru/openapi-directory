from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class HostHeaderConditionConfig:
    r"""HostHeaderConditionConfig
    Information about a host header condition.
    """
    
    values: Optional[List[str]] = field(default=None)
    
