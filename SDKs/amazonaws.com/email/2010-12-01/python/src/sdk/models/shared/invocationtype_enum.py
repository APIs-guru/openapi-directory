from dataclasses import dataclass, field
from enum import Enum

class InvocationTypeEnum(str, Enum):
    EVENT = "Event"
    REQUEST_RESPONSE = "RequestResponse"

