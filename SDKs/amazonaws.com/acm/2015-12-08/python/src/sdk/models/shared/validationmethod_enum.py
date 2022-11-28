from dataclasses import dataclass, field
from enum import Enum

class ValidationMethodEnum(str, Enum):
    EMAIL = "EMAIL"
    DNS = "DNS"

