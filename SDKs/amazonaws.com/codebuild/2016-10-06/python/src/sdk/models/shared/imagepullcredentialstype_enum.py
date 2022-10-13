from dataclasses import dataclass, field
from typing import Enum

class ImagePullCredentialsTypeEnum(str, Enum):
    CODEBUILD = "CODEBUILD"
    SERVICE_ROLE = "SERVICE_ROLE"

