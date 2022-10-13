from dataclasses import dataclass, field
from typing import Enum

class RequiredAttributeBehaviorEnum(str, Enum):
    REQUIRED_ALWAYS = "REQUIRED_ALWAYS"
    NOT_REQUIRED = "NOT_REQUIRED"

