from dataclasses import dataclass, field
from typing import Enum

class LoggerComponentEnum(str, Enum):
    GREENGRASS_SYSTEM = "GreengrassSystem"
    LAMBDA = "Lambda"

