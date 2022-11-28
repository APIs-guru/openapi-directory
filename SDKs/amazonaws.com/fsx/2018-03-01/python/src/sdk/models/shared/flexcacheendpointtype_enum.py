from dataclasses import dataclass, field
from enum import Enum

class FlexCacheEndpointTypeEnum(str, Enum):
    NONE = "NONE"
    ORIGIN = "ORIGIN"
    CACHE = "CACHE"

