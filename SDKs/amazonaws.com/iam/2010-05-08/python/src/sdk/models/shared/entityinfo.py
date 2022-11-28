from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class EntityInfo:
    r"""EntityInfo
    <p>Contains details about the specified entity (user or role).</p> <p>This data type is an element of the <a>EntityDetails</a> object.</p>
    """
    
    arn: str = field()
    id: str = field()
    name: str = field()
    type: PolicyOwnerEntityTypeEnum = field()
    path: Optional[str] = field(default=None)
    
