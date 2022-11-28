from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AccountAttribute:
    r"""AccountAttribute
    Describes an account attribute.
    """
    
    attribute_name: Optional[str] = field(default=None)
    attribute_values: Optional[List[AccountAttributeValue]] = field(default=None)
    
