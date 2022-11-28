from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SourceData:
    r"""SourceData
    The source attribute name and an optional default value to use if a document doesn't have an attribute of that name.
    """
    
    source_name: str = field()
    default_value: Optional[str] = field(default=None)
    
