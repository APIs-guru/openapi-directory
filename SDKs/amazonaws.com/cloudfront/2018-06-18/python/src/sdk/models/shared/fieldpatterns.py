from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class FieldPatterns:
    r"""FieldPatterns
    A complex data type that includes the field patterns to match for field-level encryption.
    """
    
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
