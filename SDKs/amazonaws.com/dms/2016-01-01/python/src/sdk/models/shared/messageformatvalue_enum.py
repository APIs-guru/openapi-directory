from dataclasses import dataclass, field
from enum import Enum

class MessageFormatValueEnum(str, Enum):
    JSON = "json"
    JSON_UNFORMATTED = "json-unformatted"

