from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class DescribeIndexFieldsResponse:
    r"""DescribeIndexFieldsResponse
    A response message that contains the index fields for a search domain.
    """
    
    index_fields: List[IndexFieldStatus] = field()
    
