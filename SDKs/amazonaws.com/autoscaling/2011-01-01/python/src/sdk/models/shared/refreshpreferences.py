from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class RefreshPreferences:
    r"""RefreshPreferences
    Describes the preferences for an instance refresh.
    """
    
    checkpoint_delay: Optional[int] = field(default=None)
    checkpoint_percentages: Optional[List[int]] = field(default=None)
    instance_warmup: Optional[int] = field(default=None)
    min_healthy_percentage: Optional[int] = field(default=None)
    skip_matching: Optional[bool] = field(default=None)
    
