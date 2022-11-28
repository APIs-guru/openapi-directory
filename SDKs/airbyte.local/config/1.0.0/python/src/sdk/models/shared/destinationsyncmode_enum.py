from dataclasses import dataclass, field
from enum import Enum

class DestinationSyncModeEnum(str, Enum):
    APPEND = "append"
    OVERWRITE = "overwrite"
    APPEND_DEDUP = "append_dedup"

