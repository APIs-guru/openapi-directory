from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ContentTypeProfile:
    r"""ContentTypeProfile
    A field-level encryption content type profile. 
    """
    
    content_type: str = field()
    format: FormatEnum = field()
    profile_id: Optional[str] = field(default=None)
    
