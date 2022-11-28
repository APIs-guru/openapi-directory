from dataclasses import dataclass, field
from enum import Enum

class CompatibilityEnum(str, Enum):
    NONE = "NONE"
    DISABLED = "DISABLED"
    BACKWARD = "BACKWARD"
    BACKWARD_ALL = "BACKWARD_ALL"
    FORWARD = "FORWARD"
    FORWARD_ALL = "FORWARD_ALL"
    FULL = "FULL"
    FULL_ALL = "FULL_ALL"

