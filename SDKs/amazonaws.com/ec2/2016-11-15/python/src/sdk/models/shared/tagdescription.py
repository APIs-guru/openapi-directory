from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TagDescription:
    r"""TagDescription
    Describes a tag.
    """
    
    key: Optional[str] = field(default=None)
    resource_id: Optional[str] = field(default=None)
    resource_type: Optional[ResourceTypeEnum] = field(default=None)
    value: Optional[str] = field(default=None)
    
