from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OrderableDbInstanceOption:
    r"""OrderableDbInstanceOption
    The options that are available for an instance.
    """
    
    availability_zones: Optional[List[AvailabilityZone]] = field(default=None)
    db_instance_class: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    license_model: Optional[str] = field(default=None)
    vpc: Optional[bool] = field(default=None)
    
