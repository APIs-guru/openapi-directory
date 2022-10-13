from dataclasses import dataclass, field
from typing import Enum

class PullRequestStatusEnumEnum(str, Enum):
    OPEN = "OPEN"
    CLOSED = "CLOSED"

