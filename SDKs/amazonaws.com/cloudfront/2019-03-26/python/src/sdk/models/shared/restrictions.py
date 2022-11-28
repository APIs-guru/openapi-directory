from dataclasses import dataclass, field
from . import *


@dataclass
class Restrictions:
    r"""Restrictions
    A complex type that identifies ways in which you want to restrict distribution of your content.
    """
    
    geo_restriction: GeoRestriction = field()
    
