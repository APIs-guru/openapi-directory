from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeConversionTasksResult:
    conversion_tasks: Optional[List[ConversionTask]] = field(default=None)
    
