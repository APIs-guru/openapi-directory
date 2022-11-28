from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InconsistentQuantities:
    r"""InconsistentQuantities
    The value of <code>Quantity</code> and the size of <code>Items</code> do not match.
    """
    
    message: Optional[str] = field(default=None)
    
