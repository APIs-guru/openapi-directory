from dataclasses import dataclass, field
from enum import Enum

class InstanceMetadataProtocolStateEnum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"

