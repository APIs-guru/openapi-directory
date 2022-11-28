from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccountAttributeValue:
    r"""AccountAttributeValue
    Describes a value of an account attribute.
    """
    
    attribute_value: Optional[str] = field(default=None)
    
