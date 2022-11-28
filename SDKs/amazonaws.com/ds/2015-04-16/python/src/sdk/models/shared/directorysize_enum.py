from dataclasses import dataclass, field
from enum import Enum

class DirectorySizeEnum(str, Enum):
    SMALL = "Small"
    LARGE = "Large"

