from dataclasses import dataclass, field
from enum import Enum

class PassthroughBehaviorEnum(str, Enum):
    WHEN_NO_MATCH = "WHEN_NO_MATCH"
    NEVER = "NEVER"
    WHEN_NO_TEMPLATES = "WHEN_NO_TEMPLATES"

