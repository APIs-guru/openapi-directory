from dataclasses import dataclass, field
from enum import Enum

class ConfigurationSyncStatusEnum(str, Enum):
    IN_SYNC = "InSync"
    OUT_OF_SYNC = "OutOfSync"

