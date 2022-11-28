from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeImagesResult:
    images: Optional[List[Image]] = field(default=None)
    
