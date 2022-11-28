from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVolumesModificationsResult:
    next_token: Optional[str] = field(default=None)
    volumes_modifications: Optional[List[VolumeModification]] = field(default=None)
    
