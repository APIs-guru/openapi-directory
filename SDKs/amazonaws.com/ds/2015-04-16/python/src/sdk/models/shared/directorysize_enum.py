from dataclasses import dataclass, field
from typing import Enum

class DirectorySizeEnum(str, Enum):
    SMALL = "Small"
    LARGE = "Large"

