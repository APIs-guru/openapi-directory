from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyVolumeResult:
    volume_modification: Optional[VolumeModification] = field(default=None)
    
