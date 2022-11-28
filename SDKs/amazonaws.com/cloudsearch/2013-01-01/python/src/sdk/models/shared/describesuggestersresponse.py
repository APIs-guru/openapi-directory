from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class DescribeSuggestersResponse:
    r"""DescribeSuggestersResponse
    The result of a <code>DescribeSuggesters</code> request.
    """
    
    suggesters: List[SuggesterStatus] = field()
    
