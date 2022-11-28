from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTagsOutput:
    r"""DescribeTagsOutput
    Contains the output for DescribeTags.
    """
    
    tag_descriptions: Optional[List[TagDescription]] = field(default=None)
    
