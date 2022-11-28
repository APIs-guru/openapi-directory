from dataclasses import dataclass, field
from enum import Enum

class ReplacementTypeEnumEnum(str, Enum):
    KEEP_BASE = "KEEP_BASE"
    KEEP_SOURCE = "KEEP_SOURCE"
    KEEP_DESTINATION = "KEEP_DESTINATION"
    USE_NEW_CONTENT = "USE_NEW_CONTENT"

