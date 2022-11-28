from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DeleteFleetsResult:
    successful_fleet_deletions: Optional[List[DeleteFleetSuccessItem]] = field(default=None)
    unsuccessful_fleet_deletions: Optional[List[DeleteFleetErrorItem]] = field(default=None)
    
