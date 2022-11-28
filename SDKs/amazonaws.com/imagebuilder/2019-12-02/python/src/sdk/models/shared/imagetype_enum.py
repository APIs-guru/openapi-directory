from dataclasses import dataclass, field
from enum import Enum

class ImageTypeEnum(str, Enum):
    AMI = "AMI"
    DOCKER = "DOCKER"

