from dataclasses import dataclass, field
from . import *


@dataclass
class DescribeDefaultSearchFieldResponse:
    r"""DescribeDefaultSearchFieldResponse
    A response message that contains the default search field for a search domain.
    """
    
    default_search_field: DefaultSearchFieldStatus = field()
    
