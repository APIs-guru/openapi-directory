from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TagListMessage:
    r"""TagListMessage
    Represents the output of <a>ListTagsForResource</a>.
    """
    
    tag_list: Optional[List[Tag]] = field(default=None)
    
