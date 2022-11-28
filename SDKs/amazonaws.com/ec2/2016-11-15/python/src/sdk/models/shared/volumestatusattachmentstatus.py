from dataclasses import dataclass, field
from typing import Optional


@dataclass
class VolumeStatusAttachmentStatus:
    r"""VolumeStatusAttachmentStatus
    Information about the instances to which the volume is attached.
    """
    
    instance_id: Optional[str] = field(default=None)
    io_performance: Optional[str] = field(default=None)
    
