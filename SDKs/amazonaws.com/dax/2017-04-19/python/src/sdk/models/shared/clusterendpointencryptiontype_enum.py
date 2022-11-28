from dataclasses import dataclass, field
from enum import Enum

class ClusterEndpointEncryptionTypeEnum(str, Enum):
    NONE = "NONE"
    TLS = "TLS"

