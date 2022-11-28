from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LiteralOptions:
    r"""LiteralOptions
    Options that define a literal field in the search index.
    """
    
    default_value: Optional[str] = field(default=None)
    facet_enabled: Optional[bool] = field(default=None)
    result_enabled: Optional[bool] = field(default=None)
    search_enabled: Optional[bool] = field(default=None)
    
