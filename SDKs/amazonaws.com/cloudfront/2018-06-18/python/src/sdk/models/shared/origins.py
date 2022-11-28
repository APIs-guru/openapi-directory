from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Origins:
    r"""Origins
    A complex type that contains information about origins for this distribution. 
    """
    
    quantity: int = field()
    items: Optional[List[Origin]] = field(default=None)
    
