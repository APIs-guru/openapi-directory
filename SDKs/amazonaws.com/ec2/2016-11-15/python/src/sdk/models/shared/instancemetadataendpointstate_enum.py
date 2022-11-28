from dataclasses import dataclass, field
from enum import Enum

class InstanceMetadataEndpointStateEnum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"

