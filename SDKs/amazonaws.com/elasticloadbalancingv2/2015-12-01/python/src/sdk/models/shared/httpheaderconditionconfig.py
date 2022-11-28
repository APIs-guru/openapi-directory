from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class HTTPHeaderConditionConfig:
    r"""HTTPHeaderConditionConfig
    <p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p>
    """
    
    http_header_name: Optional[str] = field(default=None)
    values: Optional[List[str]] = field(default=None)
    
