from dataclasses import dataclass, field
from enum import Enum

class SyncModeEnum(str, Enum):
    FULL_REFRESH = "full_refresh"
    INCREMENTAL = "incremental"

