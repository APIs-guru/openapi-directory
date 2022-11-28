from dataclasses import dataclass, field
from enum import Enum

class NodeTypeEnum(str, Enum):
    CRAWLER = "CRAWLER"
    JOB = "JOB"
    TRIGGER = "TRIGGER"

