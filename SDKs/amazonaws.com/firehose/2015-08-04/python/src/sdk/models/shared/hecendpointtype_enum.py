from dataclasses import dataclass, field
from enum import Enum

class HecEndpointTypeEnum(str, Enum):
    RAW = "Raw"
    EVENT = "Event"

