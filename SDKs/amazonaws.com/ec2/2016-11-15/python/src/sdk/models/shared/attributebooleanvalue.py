from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AttributeBooleanValue:
    r"""AttributeBooleanValue
    Describes a value for a resource attribute that is a Boolean value.
    """
    
    value: Optional[bool] = field(default=None)
    
