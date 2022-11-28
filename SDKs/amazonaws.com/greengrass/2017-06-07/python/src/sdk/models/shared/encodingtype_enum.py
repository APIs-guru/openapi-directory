from dataclasses import dataclass, field
from enum import Enum

class EncodingTypeEnum(str, Enum):
    BINARY = "binary"
    JSON = "json"

