from dataclasses import dataclass, field
from typing import Enum

class ArtifactPackagingEnum(str, Enum):
    NONE = "NONE"
    ZIP = "ZIP"

