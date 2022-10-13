from dataclasses import dataclass, field
from typing import Enum

class APICachingBehaviorEnum(str, Enum):
    FULL_REQUEST_CACHING = "FULL_REQUEST_CACHING"
    PER_RESOLVER_CACHING = "PER_RESOLVER_CACHING"

