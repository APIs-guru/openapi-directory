from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class Origins:
    r"""Origins
    Contains information about the origins for this distribution.
    """
    
    items: List[Origin] = field()
    quantity: int = field()
    
