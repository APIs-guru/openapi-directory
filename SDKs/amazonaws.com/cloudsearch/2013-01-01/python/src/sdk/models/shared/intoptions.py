from dataclasses import dataclass, field
from typing import Optional


@dataclass
class IntOptions:
    r"""IntOptions
    Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.
    """
    
    default_value: Optional[int] = field(default=None)
    facet_enabled: Optional[bool] = field(default=None)
    return_enabled: Optional[bool] = field(default=None)
    search_enabled: Optional[bool] = field(default=None)
    sort_enabled: Optional[bool] = field(default=None)
    source_field: Optional[str] = field(default=None)
    
