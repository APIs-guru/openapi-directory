from dataclasses import dataclass, field
from typing import Enum

class DirectConnectGatewayAttachmentStateEnum(str, Enum):
    ATTACHING = "attaching"
    ATTACHED = "attached"
    DETACHING = "detaching"
    DETACHED = "detached"

