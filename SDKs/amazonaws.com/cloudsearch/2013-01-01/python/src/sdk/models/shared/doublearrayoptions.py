from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DoubleArrayOptions:
    r"""DoubleArrayOptions
    Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.
    """
    
    default_value: Optional[float] = field(default=None)
    facet_enabled: Optional[bool] = field(default=None)
    return_enabled: Optional[bool] = field(default=None)
    search_enabled: Optional[bool] = field(default=None)
    source_fields: Optional[str] = field(default=None)
    
