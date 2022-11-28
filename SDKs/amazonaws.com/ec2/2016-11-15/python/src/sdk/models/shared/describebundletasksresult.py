from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeBundleTasksResult:
    bundle_tasks: Optional[List[BundleTask]] = field(default=None)
    
