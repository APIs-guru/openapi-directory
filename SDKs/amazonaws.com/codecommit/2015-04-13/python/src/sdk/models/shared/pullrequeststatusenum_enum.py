from dataclasses import dataclass, field
from enum import Enum

class PullRequestStatusEnumEnum(str, Enum):
    OPEN = "OPEN"
    CLOSED = "CLOSED"

