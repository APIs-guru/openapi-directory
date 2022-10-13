from dataclasses import dataclass, field
from typing import Enum

class CrawlerStateEnum(str, Enum):
    READY = "READY"
    RUNNING = "RUNNING"
    STOPPING = "STOPPING"

