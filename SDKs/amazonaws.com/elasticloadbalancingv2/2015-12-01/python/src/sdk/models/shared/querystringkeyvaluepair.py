from dataclasses import dataclass, field
from typing import Optional


@dataclass
class QueryStringKeyValuePair:
    r"""QueryStringKeyValuePair
    Information about a key/value pair.
    """
    
    key: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
