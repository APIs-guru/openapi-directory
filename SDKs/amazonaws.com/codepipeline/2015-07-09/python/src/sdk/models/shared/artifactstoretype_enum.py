from dataclasses import dataclass, field
from typing import Enum

class ArtifactStoreTypeEnum(str, Enum):
    S3 = "S3"

