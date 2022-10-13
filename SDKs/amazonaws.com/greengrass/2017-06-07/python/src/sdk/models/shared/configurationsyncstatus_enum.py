from dataclasses import dataclass, field
from typing import Enum

class ConfigurationSyncStatusEnum(str, Enum):
    IN_SYNC = "InSync"
    OUT_OF_SYNC = "OutOfSync"

