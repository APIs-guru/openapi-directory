from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ConflictingAlias:
    r"""ConflictingAlias
    An alias (also called a CNAME) and the CloudFront distribution and Amazon Web Services account ID that it’s associated with. The distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don’t own.
    """
    
    account_id: Optional[str] = field(default=None)
    alias: Optional[str] = field(default=None)
    distribution_id: Optional[str] = field(default=None)
    
