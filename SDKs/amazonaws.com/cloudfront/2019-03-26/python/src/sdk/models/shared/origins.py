from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class Origins:
    r"""Origins
    A complex type that contains information about origins and origin groups for this distribution. 
    """
    
    items: List[Origin] = field()
    quantity: int = field()
    
