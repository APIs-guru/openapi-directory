from dataclasses import dataclass, field
from enum import Enum

class InstanceMetadataHTTPTokensStateEnum(str, Enum):
    OPTIONAL = "optional"
    REQUIRED = "required"

