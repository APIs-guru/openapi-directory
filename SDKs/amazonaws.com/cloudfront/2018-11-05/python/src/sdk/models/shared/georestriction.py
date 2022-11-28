from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class GeoRestriction:
    r"""GeoRestriction
    A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases. 
    """
    
    quantity: int = field()
    restriction_type: GeoRestrictionTypeEnum = field()
    items: Optional[List[str]] = field(default=None)
    
