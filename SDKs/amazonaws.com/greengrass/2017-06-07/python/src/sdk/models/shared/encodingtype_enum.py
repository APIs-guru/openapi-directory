from dataclasses import dataclass, field
from typing import Enum

class EncodingTypeEnum(str, Enum):
    BINARY = "binary"
    JSON = "json"

