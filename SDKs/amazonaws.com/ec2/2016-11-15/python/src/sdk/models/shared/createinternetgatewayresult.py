from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateInternetGatewayResult:
    internet_gateway: Optional[InternetGateway] = field(default=None)
    
