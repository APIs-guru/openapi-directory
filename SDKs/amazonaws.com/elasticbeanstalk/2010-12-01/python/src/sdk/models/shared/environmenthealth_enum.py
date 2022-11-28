from dataclasses import dataclass, field
from enum import Enum

class EnvironmentHealthEnum(str, Enum):
    GREEN = "Green"
    YELLOW = "Yellow"
    RED = "Red"
    GREY = "Grey"

