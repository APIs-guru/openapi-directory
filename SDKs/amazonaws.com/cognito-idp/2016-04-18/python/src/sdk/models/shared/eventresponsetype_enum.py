from dataclasses import dataclass, field
from enum import Enum

class EventResponseTypeEnum(str, Enum):
    SUCCESS = "Success"
    FAILURE = "Failure"

