from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TextArrayOptions:
    r"""TextArrayOptions
    Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.
    """
    
    analysis_scheme: Optional[str] = field(default=None)
    default_value: Optional[str] = field(default=None)
    highlight_enabled: Optional[bool] = field(default=None)
    return_enabled: Optional[bool] = field(default=None)
    source_fields: Optional[str] = field(default=None)
    
