from dataclasses import dataclass, field
from typing import Enum

class ValidationMethodEnum(str, Enum):
    EMAIL = "EMAIL"
    DNS = "DNS"

