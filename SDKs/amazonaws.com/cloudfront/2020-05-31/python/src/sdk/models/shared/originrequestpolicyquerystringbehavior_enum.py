from dataclasses import dataclass, field
from enum import Enum

class OriginRequestPolicyQueryStringBehaviorEnum(str, Enum):
    NONE = "none"
    WHITELIST = "whitelist"
    ALL = "all"

