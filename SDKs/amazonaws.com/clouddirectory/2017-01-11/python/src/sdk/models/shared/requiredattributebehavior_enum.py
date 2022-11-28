from dataclasses import dataclass, field
from enum import Enum

class RequiredAttributeBehaviorEnum(str, Enum):
    REQUIRED_ALWAYS = "REQUIRED_ALWAYS"
    NOT_REQUIRED = "NOT_REQUIRED"

