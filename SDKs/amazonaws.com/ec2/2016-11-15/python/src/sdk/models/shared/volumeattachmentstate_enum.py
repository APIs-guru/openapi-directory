from dataclasses import dataclass, field
from enum import Enum

class VolumeAttachmentStateEnum(str, Enum):
    ATTACHING = "attaching"
    ATTACHED = "attached"
    DETACHING = "detaching"
    DETACHED = "detached"
    BUSY = "busy"

