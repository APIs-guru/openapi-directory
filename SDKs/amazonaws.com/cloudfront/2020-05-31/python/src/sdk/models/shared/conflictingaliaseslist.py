from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ConflictingAliasesList:
    r"""ConflictingAliasesList
    A list of aliases (also called CNAMEs) and the CloudFront distributions and Amazon Web Services accounts that they are associated with. In the list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don’t own.
    """
    
    items: Optional[List[ConflictingAlias]] = field(default=None)
    max_items: Optional[int] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    quantity: Optional[int] = field(default=None)
    
