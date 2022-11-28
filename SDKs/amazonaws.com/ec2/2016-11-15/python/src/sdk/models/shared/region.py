from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Region:
    r"""Region
    Describes a Region.
    """
    
    endpoint: Optional[str] = field(default=None)
    opt_in_status: Optional[str] = field(default=None)
    region_name: Optional[str] = field(default=None)
    
