from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ContentTypeProfiles:
    r"""ContentTypeProfiles
    Field-level encryption content type-profile. 
    """
    
    quantity: int = field()
    items: Optional[List[ContentTypeProfile]] = field(default=None)
    
