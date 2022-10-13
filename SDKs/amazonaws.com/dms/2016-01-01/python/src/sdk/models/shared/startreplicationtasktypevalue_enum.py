from dataclasses import dataclass, field
from typing import Enum

class StartReplicationTaskTypeValueEnum(str, Enum):
    START_REPLICATION = "start-replication"
    RESUME_PROCESSING = "resume-processing"
    RELOAD_TARGET = "reload-target"

