from dataclasses import dataclass, field
from typing import Enum

class ContentEncodingEnum(str, Enum):
    NONE = "NONE"
    GZIP = "GZIP"

