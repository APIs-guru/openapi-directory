from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PolicyAttributeDescription:
    r"""PolicyAttributeDescription
    Information about a policy attribute.
    """
    
    attribute_name: Optional[str] = field(default=None)
    attribute_value: Optional[str] = field(default=None)
    
