from dataclasses import dataclass, field
from typing import Enum

class EndpointTypeEnum(str, Enum):
    REGIONAL = "REGIONAL"
    EDGE = "EDGE"

