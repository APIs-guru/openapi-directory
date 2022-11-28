from dataclasses import dataclass, field
from enum import Enum

class DirectoryEditionEnum(str, Enum):
    ENTERPRISE = "Enterprise"
    STANDARD = "Standard"

