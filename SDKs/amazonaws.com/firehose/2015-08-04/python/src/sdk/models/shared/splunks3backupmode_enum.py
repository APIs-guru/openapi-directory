from dataclasses import dataclass, field
from enum import Enum

class SplunkS3BackupModeEnum(str, Enum):
    FAILED_EVENTS_ONLY = "FailedEventsOnly"
    ALL_EVENTS = "AllEvents"

