from dataclasses import dataclass, field
from enum import Enum

class CrawlerStateEnum(str, Enum):
    READY = "READY"
    RUNNING = "RUNNING"
    STOPPING = "STOPPING"

