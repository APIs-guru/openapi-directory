from dataclasses import dataclass, field
from enum import Enum

class MessageFormatEnum(str, Enum):
    RAW = "RAW"
    JSON = "JSON"

