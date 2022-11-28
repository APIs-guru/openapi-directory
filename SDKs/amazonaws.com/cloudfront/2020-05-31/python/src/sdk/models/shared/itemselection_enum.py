from dataclasses import dataclass, field
from enum import Enum

class ItemSelectionEnum(str, Enum):
    NONE = "none"
    WHITELIST = "whitelist"
    ALL = "all"

