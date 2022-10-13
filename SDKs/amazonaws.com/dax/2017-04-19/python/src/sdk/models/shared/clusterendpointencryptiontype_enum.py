from dataclasses import dataclass, field
from typing import Enum

class ClusterEndpointEncryptionTypeEnum(str, Enum):
    NONE = "NONE"
    TLS = "TLS"

