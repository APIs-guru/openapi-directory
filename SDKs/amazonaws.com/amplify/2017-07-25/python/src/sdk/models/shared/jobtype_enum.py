from dataclasses import dataclass, field
from enum import Enum

class JobTypeEnum(str, Enum):
    RELEASE = "RELEASE"
    RETRY = "RETRY"
    MANUAL = "MANUAL"
    WEB_HOOK = "WEB_HOOK"

