from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class FunctionAssociations:
    r"""FunctionAssociations
    A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.
    """
    
    quantity: int = field()
    items: Optional[List[FunctionAssociation]] = field(default=None)
    
