from dataclasses import dataclass, field
from enum import Enum

class ContentHandlingStrategyEnum(str, Enum):
    CONVERT_TO_BINARY = "CONVERT_TO_BINARY"
    CONVERT_TO_TEXT = "CONVERT_TO_TEXT"

