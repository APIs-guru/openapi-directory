from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ImportVolumeResult:
    conversion_task: Optional[ConversionTask] = field(default=None)
    
