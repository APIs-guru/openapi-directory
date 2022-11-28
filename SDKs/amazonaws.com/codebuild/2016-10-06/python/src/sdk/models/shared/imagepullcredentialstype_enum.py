from dataclasses import dataclass, field
from enum import Enum

class ImagePullCredentialsTypeEnum(str, Enum):
    CODEBUILD = "CODEBUILD"
    SERVICE_ROLE = "SERVICE_ROLE"

