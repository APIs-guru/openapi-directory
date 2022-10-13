from dataclasses import dataclass, field
from typing import Enum

class StorageVirtualMachineSubtypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    DP_DESTINATION = "DP_DESTINATION"
    SYNC_DESTINATION = "SYNC_DESTINATION"
    SYNC_SOURCE = "SYNC_SOURCE"

