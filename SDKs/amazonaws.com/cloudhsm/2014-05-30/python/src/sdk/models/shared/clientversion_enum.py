from dataclasses import dataclass, field
from typing import Enum

class ClientVersionEnum(str, Enum):
    FIVE_1 = "5.1"
    FIVE_3 = "5.3"

