from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class PrefixList:
    r"""PrefixList
    Describes prefixes for Amazon Web Services services.
    """
    
    cidrs: Optional[List[str]] = field(default=None)
    prefix_list_id: Optional[str] = field(default=None)
    prefix_list_name: Optional[str] = field(default=None)
    
