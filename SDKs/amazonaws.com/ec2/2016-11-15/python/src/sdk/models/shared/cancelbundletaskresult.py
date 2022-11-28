from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CancelBundleTaskResult:
    r"""CancelBundleTaskResult
    Contains the output of CancelBundleTask.
    """
    
    bundle_task: Optional[BundleTask] = field(default=None)
    
