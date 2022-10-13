from dataclasses import dataclass, field
from typing import Enum

class ClusterFieldEnum(str, Enum):
    ATTACHMENTS = "ATTACHMENTS"
    CONFIGURATIONS = "CONFIGURATIONS"
    SETTINGS = "SETTINGS"
    STATISTICS = "STATISTICS"
    TAGS = "TAGS"

