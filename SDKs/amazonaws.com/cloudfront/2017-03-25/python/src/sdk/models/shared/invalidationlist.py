from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class InvalidationList:
    r"""InvalidationList
    The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html\">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.
    """
    
    is_truncated: bool = field()
    marker: str = field()
    max_items: int = field()
    quantity: int = field()
    items: Optional[List[InvalidationSummary]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
