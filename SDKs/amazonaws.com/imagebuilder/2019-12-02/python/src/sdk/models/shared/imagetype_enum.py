from dataclasses import dataclass, field
from typing import Enum

class ImageTypeEnum(str, Enum):
    AMI = "AMI"
    DOCKER = "DOCKER"

