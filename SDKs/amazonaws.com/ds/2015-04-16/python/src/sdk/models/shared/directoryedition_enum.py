from dataclasses import dataclass, field
from typing import Enum

class DirectoryEditionEnum(str, Enum):
    ENTERPRISE = "Enterprise"
    STANDARD = "Standard"

