from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TextOptions:
    r"""TextOptions
    Options that define a text field in the search index.
    """
    
    default_value: Optional[str] = field(default=None)
    facet_enabled: Optional[bool] = field(default=None)
    result_enabled: Optional[bool] = field(default=None)
    text_processor: Optional[str] = field(default=None)
    
