from dataclasses import dataclass, field
from typing import Enum

class HecEndpointTypeEnum(str, Enum):
    RAW = "Raw"
    EVENT = "Event"

