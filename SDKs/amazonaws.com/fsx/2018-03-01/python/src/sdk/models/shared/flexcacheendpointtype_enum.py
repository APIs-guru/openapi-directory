from dataclasses import dataclass, field
from typing import Enum

class FlexCacheEndpointTypeEnum(str, Enum):
    NONE = "NONE"
    ORIGIN = "ORIGIN"
    CACHE = "CACHE"

