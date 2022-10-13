from dataclasses import dataclass, field
from typing import Enum

class CompromisedCredentialsEventActionTypeEnum(str, Enum):
    BLOCK = "BLOCK"
    NO_ACTION = "NO_ACTION"

