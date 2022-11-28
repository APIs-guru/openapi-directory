from dataclasses import dataclass, field
from . import *


@dataclass
class ListTagsForResourceResult:
    r"""ListTagsForResourceResult
     The returned result of the corresponding request.
    """
    
    tags: Tags = field()
    
