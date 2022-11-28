from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTagsOutput:
    tag_descriptions: Optional[List[TagDescription]] = field(default=None)
    
