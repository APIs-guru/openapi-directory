from dataclasses import dataclass, field
from typing import Enum

class CompressionTypeValueEnum(str, Enum):
    NONE = "none"
    GZIP = "gzip"

