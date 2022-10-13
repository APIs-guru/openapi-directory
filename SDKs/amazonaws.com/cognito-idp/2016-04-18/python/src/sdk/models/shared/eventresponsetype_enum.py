from dataclasses import dataclass, field
from typing import Enum

class EventResponseTypeEnum(str, Enum):
    SUCCESS = "Success"
    FAILURE = "Failure"

