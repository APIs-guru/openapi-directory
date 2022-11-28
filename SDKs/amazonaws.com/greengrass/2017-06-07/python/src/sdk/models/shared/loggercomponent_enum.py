from dataclasses import dataclass, field
from enum import Enum

class LoggerComponentEnum(str, Enum):
    GREENGRASS_SYSTEM = "GreengrassSystem"
    LAMBDA = "Lambda"

