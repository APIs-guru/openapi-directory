from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateVpcEndpointServiceConfigurationResult:
    client_token: Optional[str] = field(default=None)
    service_configuration: Optional[ServiceConfiguration] = field(default=None)
    
