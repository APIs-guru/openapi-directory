from dataclasses import dataclass, field
from typing import Optional


@dataclass
class QueryArgProfileEmpty:
    r"""QueryArgProfileEmpty
    No profile specified for the field-level encryption query argument.
    """
    
    message: Optional[str] = field(default=None)
    
