from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ServiceTypeDetail:
    r"""ServiceTypeDetail
    Describes the type of service for a VPC endpoint.
    """
    
    service_type: Optional[ServiceTypeEnum] = field(default=None)
    
