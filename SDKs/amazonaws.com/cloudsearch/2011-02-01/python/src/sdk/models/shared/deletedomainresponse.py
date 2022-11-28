from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteDomainResponse:
    r"""DeleteDomainResponse
    A response message that contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.
    """
    
    domain_status: Optional[DomainStatus] = field(default=None)
    
