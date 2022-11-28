from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class VolumeStatusItem:
    r"""VolumeStatusItem
    Describes the volume status.
    """
    
    actions: Optional[List[VolumeStatusAction]] = field(default=None)
    attachment_statuses: Optional[List[VolumeStatusAttachmentStatus]] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    events: Optional[List[VolumeStatusEvent]] = field(default=None)
    outpost_arn: Optional[str] = field(default=None)
    volume_id: Optional[str] = field(default=None)
    volume_status: Optional[VolumeStatusInfo] = field(default=None)
    
