from dataclasses import dataclass, field
from typing import Enum

class ResourceTypeEnum(str, Enum):
    JAR = "JAR"
    FILE = "FILE"
    ARCHIVE = "ARCHIVE"

