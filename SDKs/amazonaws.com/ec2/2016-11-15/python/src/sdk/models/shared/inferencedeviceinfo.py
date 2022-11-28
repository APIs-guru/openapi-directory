from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InferenceDeviceInfo:
    r"""InferenceDeviceInfo
    Describes the Inference accelerators for the instance type.
    """
    
    count: Optional[int] = field(default=None)
    manufacturer: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    
