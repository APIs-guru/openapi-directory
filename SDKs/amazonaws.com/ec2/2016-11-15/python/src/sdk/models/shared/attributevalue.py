from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AttributeValue:
    r"""AttributeValue
    Describes a value for a resource attribute that is a String.
    """
    
    value: Optional[str] = field(default=None)
    
