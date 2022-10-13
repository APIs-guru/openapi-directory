from dataclasses import dataclass, field
from typing import Enum

class PayloadTypeEnum(str, Enum):
    STRING = "STRING"
    JSON = "JSON"

