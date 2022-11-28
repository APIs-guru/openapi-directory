from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CreateFleetResult:
    errors: Optional[List[CreateFleetError]] = field(default=None)
    fleet_id: Optional[str] = field(default=None)
    instances: Optional[List[CreateFleetInstance]] = field(default=None)
    
