from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ActiveInstance:
    r"""ActiveInstance
    Describes a running instance in a Spot Fleet.
    """
    
    instance_health: Optional[InstanceHealthStatusEnum] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    instance_type: Optional[str] = field(default=None)
    spot_instance_request_id: Optional[str] = field(default=None)
    
