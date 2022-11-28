from dataclasses import dataclass, field
from enum import Enum

class SourceTypeEnum(str, Enum):
    GIT = "Git"
    ZIP = "Zip"

