from dataclasses import dataclass, field
from typing import Enum

class ServiceEnum(str, Enum):
    COGNITO = "COGNITO"

