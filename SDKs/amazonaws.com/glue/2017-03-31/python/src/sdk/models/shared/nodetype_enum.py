from dataclasses import dataclass, field
from typing import Enum

class NodeTypeEnum(str, Enum):
    CRAWLER = "CRAWLER"
    JOB = "JOB"
    TRIGGER = "TRIGGER"

