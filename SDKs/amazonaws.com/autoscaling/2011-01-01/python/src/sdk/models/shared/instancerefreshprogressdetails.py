from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class InstanceRefreshProgressDetails:
    r"""InstanceRefreshProgressDetails
    Reports the progress of an instance refresh on an Auto Scaling group that has a warm pool. This includes separate details for instances in the warm pool and instances in the Auto Scaling group (the live pool).
    """
    
    live_pool_progress: Optional[InstanceRefreshLivePoolProgress] = field(default=None)
    warm_pool_progress: Optional[InstanceRefreshWarmPoolProgress] = field(default=None)
    
