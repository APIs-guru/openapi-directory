from dataclasses import dataclass, field
from typing import Enum

class MessageFormatEnum(str, Enum):
    RAW = "RAW"
    JSON = "JSON"

