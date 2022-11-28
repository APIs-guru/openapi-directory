from dataclasses import dataclass, field
from enum import Enum

class MergeOptionTypeEnumEnum(str, Enum):
    FAST_FORWARD_MERGE = "FAST_FORWARD_MERGE"
    SQUASH_MERGE = "SQUASH_MERGE"
    THREE_WAY_MERGE = "THREE_WAY_MERGE"

