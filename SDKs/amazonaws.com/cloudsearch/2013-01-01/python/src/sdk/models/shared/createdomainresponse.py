from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateDomainResponse:
    r"""CreateDomainResponse
    The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.
    """
    
    domain_status: Optional[DomainStatus] = field(default=None)
    
