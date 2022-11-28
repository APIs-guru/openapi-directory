from dataclasses import dataclass, field
from enum import Enum

class EndpointTypeEnum(str, Enum):
    REGIONAL = "REGIONAL"
    EDGE = "EDGE"

