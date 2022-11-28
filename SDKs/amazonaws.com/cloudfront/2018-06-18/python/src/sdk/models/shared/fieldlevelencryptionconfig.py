from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class FieldLevelEncryptionConfig:
    r"""FieldLevelEncryptionConfig
    A complex data type that includes the profile configurations specified for field-level encryption. 
    """
    
    caller_reference: str = field()
    comment: Optional[str] = field(default=None)
    content_type_profile_config: Optional[ContentTypeProfileConfig] = field(default=None)
    query_arg_profile_config: Optional[QueryArgProfileConfig] = field(default=None)
    
