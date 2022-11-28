from dataclasses import dataclass, field
from . import *


@dataclass
class DescribeStopwordOptionsResponse:
    r"""DescribeStopwordOptionsResponse
    A response message that contains the stopword options for a search domain.
    """
    
    stopwords: StopwordOptionsStatus = field()
    
