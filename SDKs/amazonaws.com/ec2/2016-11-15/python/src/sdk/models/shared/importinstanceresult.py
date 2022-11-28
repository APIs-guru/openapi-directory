from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ImportInstanceResult:
    conversion_task: Optional[ConversionTask] = field(default=None)
    
