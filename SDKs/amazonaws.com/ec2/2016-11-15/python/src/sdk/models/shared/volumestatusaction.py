from dataclasses import dataclass, field
from typing import Optional


@dataclass
class VolumeStatusAction:
    r"""VolumeStatusAction
    Describes a volume status operation code.
    """
    
    code: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    event_id: Optional[str] = field(default=None)
    event_type: Optional[str] = field(default=None)
    
