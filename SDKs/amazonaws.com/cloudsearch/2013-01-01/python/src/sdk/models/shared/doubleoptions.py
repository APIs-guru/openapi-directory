from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DoubleOptions:
    r"""DoubleOptions
    Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.
    """
    
    default_value: Optional[float] = field(default=None)
    facet_enabled: Optional[bool] = field(default=None)
    return_enabled: Optional[bool] = field(default=None)
    search_enabled: Optional[bool] = field(default=None)
    sort_enabled: Optional[bool] = field(default=None)
    source_field: Optional[str] = field(default=None)
    
