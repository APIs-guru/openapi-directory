from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class InferenceAcceleratorInfo:
    r"""InferenceAcceleratorInfo
    Describes the Inference accelerators for the instance type.
    """
    
    accelerators: Optional[List[InferenceDeviceInfo]] = field(default=None)
    
