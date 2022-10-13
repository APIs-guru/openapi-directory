from dataclasses import dataclass, field
from typing import Enum

class SyncModeEnum(str, Enum):
    FULL_REFRESH = "full_refresh"
    INCREMENTAL = "incremental"

