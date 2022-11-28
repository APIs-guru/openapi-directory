from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OptionRestrictionRegex:
    r"""OptionRestrictionRegex
    A regular expression representing a restriction on a string configuration option value.
    """
    
    label: Optional[str] = field(default=None)
    pattern: Optional[str] = field(default=None)
    
