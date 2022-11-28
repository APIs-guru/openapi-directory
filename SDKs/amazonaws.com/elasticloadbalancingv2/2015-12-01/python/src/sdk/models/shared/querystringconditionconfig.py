from dataclasses import dataclass, field
from typing import Any,List,Optional
from . import *


@dataclass
class QueryStringConditionConfig:
    r"""QueryStringConditionConfig
    <p>Information about a query string condition.</p> <p>The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&amp;' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.</p>
    """
    
    values: Optional[List[QueryStringKeyValuePair]] = field(default=None)
    
