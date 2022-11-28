from dataclasses import dataclass, field
from enum import Enum

class CachePolicyQueryStringBehaviorEnum(str, Enum):
    NONE = "none"
    WHITELIST = "whitelist"
    ALL_EXCEPT = "allExcept"
    ALL = "all"

