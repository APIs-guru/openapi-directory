from dataclasses import dataclass, field
from enum import Enum

class ArtifactNamespaceEnum(str, Enum):
    NONE = "NONE"
    BUILD_ID = "BUILD_ID"

