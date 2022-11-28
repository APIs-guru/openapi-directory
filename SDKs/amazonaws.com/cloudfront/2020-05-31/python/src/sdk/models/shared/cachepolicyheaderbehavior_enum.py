from dataclasses import dataclass, field
from enum import Enum

class CachePolicyHeaderBehaviorEnum(str, Enum):
    NONE = "none"
    WHITELIST = "whitelist"

