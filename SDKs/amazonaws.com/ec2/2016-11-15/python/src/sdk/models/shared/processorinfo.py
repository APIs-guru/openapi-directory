from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ProcessorInfo:
    r"""ProcessorInfo
    Describes the processor used by the instance type.
    """
    
    supported_architectures: Optional[List[ArchitectureTypeEnum]] = field(default=None)
    sustained_clock_speed_in_ghz: Optional[float] = field(default=None)
    
