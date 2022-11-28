from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LiteralArrayOptions:
    r"""LiteralArrayOptions
    Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.
    """
    
    default_value: Optional[str] = field(default=None)
    facet_enabled: Optional[bool] = field(default=None)
    return_enabled: Optional[bool] = field(default=None)
    search_enabled: Optional[bool] = field(default=None)
    source_fields: Optional[str] = field(default=None)
    
