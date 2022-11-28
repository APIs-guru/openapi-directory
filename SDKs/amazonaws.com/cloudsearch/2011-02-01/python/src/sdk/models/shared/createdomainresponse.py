from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateDomainResponse:
    r"""CreateDomainResponse
    A response message that contains the status of a newly created domain.
    """
    
    domain_status: Optional[DomainStatus] = field(default=None)
    
