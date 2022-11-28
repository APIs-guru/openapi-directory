from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class DescribeIndexFieldsResponse:
    r"""DescribeIndexFieldsResponse
    The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.
    """
    
    index_fields: List[IndexFieldStatus] = field()
    
