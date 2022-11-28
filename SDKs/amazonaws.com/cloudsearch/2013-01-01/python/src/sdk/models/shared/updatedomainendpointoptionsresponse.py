from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class UpdateDomainEndpointOptionsResponse:
    r"""UpdateDomainEndpointOptionsResponse
    The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options. 
    """
    
    domain_endpoint_options: Optional[DomainEndpointOptionsStatus] = field(default=None)
    
