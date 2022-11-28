from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SourceDataMap:
    r"""SourceDataMap
    Specifies how to map source attribute values to custom values when populating an <code>IndexField</code>.
    """
    
    source_name: str = field()
    cases: Optional[dict[str, str]] = field(default=None)
    default_value: Optional[str] = field(default=None)
    
