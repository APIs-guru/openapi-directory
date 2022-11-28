from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ContentTypeProfileConfig:
    r"""ContentTypeProfileConfig
    The configuration for a field-level encryption content type-profile mapping. 
    """
    
    forward_when_content_type_is_unknown: bool = field()
    content_type_profiles: Optional[ContentTypeProfiles] = field(default=None)
    
