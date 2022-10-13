from dataclasses import dataclass, field
from typing import Enum

class FlexMatchModeEnum(str, Enum):
    STANDALONE = "STANDALONE"
    WITH_QUEUE = "WITH_QUEUE"

