from dataclasses import dataclass, field
from . import *


@dataclass
class DescribeStemmingOptionsResponse:
    r"""DescribeStemmingOptionsResponse
    A response message that contains the stemming options for a search domain.
    """
    
    stems: StemmingOptionsStatus = field()
    
