from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ResourceTagsDescriptionMessage:
    resource_arn: Optional[str] = field(default=None)
    resource_tags: Optional[List[Tag]] = field(default=None)
    
