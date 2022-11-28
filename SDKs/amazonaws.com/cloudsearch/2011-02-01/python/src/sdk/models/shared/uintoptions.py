from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UIntOptions:
    r"""UIntOptions
    Options that define a <code>uint</code> field in the search index.
    """
    
    default_value: Optional[int] = field(default=None)
    
