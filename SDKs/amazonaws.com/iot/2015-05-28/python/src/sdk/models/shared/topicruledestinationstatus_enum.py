from dataclasses import dataclass, field
from typing import Enum

class TopicRuleDestinationStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    IN_PROGRESS = "IN_PROGRESS"
    DISABLED = "DISABLED"
    ERROR = "ERROR"
    DELETING = "DELETING"

