from dataclasses import dataclass, field
from enum import Enum

class PayloadTypeEnum(str, Enum):
    STRING = "STRING"
    JSON = "JSON"

