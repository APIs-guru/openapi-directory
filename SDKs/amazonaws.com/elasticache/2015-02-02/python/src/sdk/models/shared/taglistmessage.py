from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TagListMessage:
    r"""TagListMessage
    Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.
    """
    
    tag_list: Optional[List[Tag]] = field(default=None)
    
