from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class QueryArgProfileConfig:
    r"""QueryArgProfileConfig
    Configuration for query argument-profile mapping for field-level encryption.
    """
    
    forward_when_query_arg_profile_is_unknown: bool = field()
    query_arg_profiles: Optional[QueryArgProfiles] = field(default=None)
    
