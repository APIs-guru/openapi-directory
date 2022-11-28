from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeImportImageTasksResult:
    import_image_tasks: Optional[List[ImportImageTask]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
