from dataclasses import dataclass, field
from enum import Enum

class ContentEncodingEnum(str, Enum):
    NONE = "NONE"
    GZIP = "GZIP"

