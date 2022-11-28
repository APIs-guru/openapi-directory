from dataclasses import dataclass, field
from enum import Enum

class LambdaEventSourceTypeEnum(str, Enum):
    PUB_SUB = "PUB_SUB"
    IOT_CORE = "IOT_CORE"

