from dataclasses import dataclass, field
from enum import Enum

class TestGridSessionArtifactTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VIDEO = "VIDEO"
    SELENIUM_LOG = "SELENIUM_LOG"

