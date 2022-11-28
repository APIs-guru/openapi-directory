from dataclasses import dataclass, field
from enum import Enum

class ResourceLocationValuesEnum(str, Enum):
    CLOUD = "CLOUD"
    OUTPOST = "OUTPOST"

