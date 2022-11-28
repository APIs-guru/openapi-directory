from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeStoreImageTasksResult:
    next_token: Optional[str] = field(default=None)
    store_image_task_results: Optional[List[StoreImageTaskResult]] = field(default=None)
    
