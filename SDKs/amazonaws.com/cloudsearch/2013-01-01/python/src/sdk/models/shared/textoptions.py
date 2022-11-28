from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TextOptions:
    r"""TextOptions
    Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.
    """
    
    analysis_scheme: Optional[str] = field(default=None)
    default_value: Optional[str] = field(default=None)
    highlight_enabled: Optional[bool] = field(default=None)
    return_enabled: Optional[bool] = field(default=None)
    sort_enabled: Optional[bool] = field(default=None)
    source_field: Optional[str] = field(default=None)
    
