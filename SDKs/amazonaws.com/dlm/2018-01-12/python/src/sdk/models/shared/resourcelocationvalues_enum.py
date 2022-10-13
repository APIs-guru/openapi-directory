from dataclasses import dataclass, field
from typing import Enum

class ResourceLocationValuesEnum(str, Enum):
    CLOUD = "CLOUD"
    OUTPOST = "OUTPOST"

