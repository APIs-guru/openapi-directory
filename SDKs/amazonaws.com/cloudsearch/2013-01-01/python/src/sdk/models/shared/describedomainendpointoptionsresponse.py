from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeDomainEndpointOptionsResponse:
    r"""DescribeDomainEndpointOptionsResponse
    The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options. 
    """
    
    domain_endpoint_options: Optional[DomainEndpointOptionsStatus] = field(default=None)
    
