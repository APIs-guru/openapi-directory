from dataclasses import dataclass, field
from typing import Enum

class ConflictResolutionStrategyTypeEnumEnum(str, Enum):
    NONE = "NONE"
    ACCEPT_SOURCE = "ACCEPT_SOURCE"
    ACCEPT_DESTINATION = "ACCEPT_DESTINATION"
    AUTOMERGE = "AUTOMERGE"

