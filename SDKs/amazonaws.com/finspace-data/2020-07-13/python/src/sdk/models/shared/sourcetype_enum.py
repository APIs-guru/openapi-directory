from dataclasses import dataclass, field
from typing import Enum

class SourceTypeEnum(str, Enum):
    S3 = "S3"

