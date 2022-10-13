from dataclasses import dataclass, field
from typing import Enum

class ArtifactNamespaceEnum(str, Enum):
    NONE = "NONE"
    BUILD_ID = "BUILD_ID"

