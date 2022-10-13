from dataclasses import dataclass, field
from typing import Enum

class DestinationSyncModeEnum(str, Enum):
    APPEND = "append"
    OVERWRITE = "overwrite"
    APPEND_DEDUP = "append_dedup"

