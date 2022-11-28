from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class BundleInstanceResult:
    r"""BundleInstanceResult
    Contains the output of BundleInstance.
    """
    
    bundle_task: Optional[BundleTask] = field(default=None)
    
