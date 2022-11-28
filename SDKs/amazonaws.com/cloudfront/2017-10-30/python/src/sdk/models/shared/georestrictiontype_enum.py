from dataclasses import dataclass, field
from enum import Enum

class GeoRestrictionTypeEnum(str, Enum):
    BLACKLIST = "blacklist"
    WHITELIST = "whitelist"
    NONE = "none"

