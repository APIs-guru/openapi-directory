from dataclasses import dataclass, field
from enum import Enum

class ArtifactPackagingEnum(str, Enum):
    NONE = "NONE"
    ZIP = "ZIP"

