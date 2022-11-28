from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PolicyAttributeTypeDescription:
    r"""PolicyAttributeTypeDescription
    Information about a policy attribute type.
    """
    
    attribute_name: Optional[str] = field(default=None)
    attribute_type: Optional[str] = field(default=None)
    cardinality: Optional[str] = field(default=None)
    default_value: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    
