from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class PathPatternConditionConfig:
    r"""PathPatternConditionConfig
    Information about a path pattern condition.
    """
    
    values: Optional[List[str]] = field(default=None)
    
