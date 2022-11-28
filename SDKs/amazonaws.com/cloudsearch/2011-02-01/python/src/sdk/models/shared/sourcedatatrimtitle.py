from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SourceDataTrimTitle:
    r"""SourceDataTrimTitle
    Specifies how to trim common words from the beginning of a field to enable title sorting by that field.
    """
    
    source_name: str = field()
    default_value: Optional[str] = field(default=None)
    language: Optional[str] = field(default=None)
    separator: Optional[str] = field(default=None)
    
