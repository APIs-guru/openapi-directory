from dataclasses import dataclass, field
from typing import Enum

class ArtifactsTypeEnum(str, Enum):
    CODEPIPELINE = "CODEPIPELINE"
    S3 = "S3"
    NO_ARTIFACTS = "NO_ARTIFACTS"

