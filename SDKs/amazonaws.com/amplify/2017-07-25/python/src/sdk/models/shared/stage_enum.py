from dataclasses import dataclass, field
from enum import Enum

class StageEnum(str, Enum):
    PRODUCTION = "PRODUCTION"
    BETA = "BETA"
    DEVELOPMENT = "DEVELOPMENT"
    EXPERIMENTAL = "EXPERIMENTAL"
    PULL_REQUEST = "PULL_REQUEST"

