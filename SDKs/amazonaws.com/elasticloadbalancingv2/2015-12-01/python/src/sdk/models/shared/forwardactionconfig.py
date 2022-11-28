from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ForwardActionConfig:
    r"""ForwardActionConfig
    Information about a forward action.
    """
    
    target_group_stickiness_config: Optional[TargetGroupStickinessConfig] = field(default=None)
    target_groups: Optional[List[TargetGroupTuple]] = field(default=None)
    
