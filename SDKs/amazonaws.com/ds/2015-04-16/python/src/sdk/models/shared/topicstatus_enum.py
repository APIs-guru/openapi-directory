from dataclasses import dataclass, field
from typing import Enum

class TopicStatusEnum(str, Enum):
    REGISTERED = "Registered"
    TOPIC_NOT_FOUND = "Topic not found"
    FAILED = "Failed"
    DELETED = "Deleted"

