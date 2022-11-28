from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LaunchTemplateCPUOptions:
    r"""LaunchTemplateCPUOptions
    The CPU options for the instance.
    """
    
    core_count: Optional[int] = field(default=None)
    threads_per_core: Optional[int] = field(default=None)
    
