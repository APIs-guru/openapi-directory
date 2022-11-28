from dataclasses import dataclass, field
from enum import Enum

class ConfigurationItemTypeEnum(str, Enum):
    SERVER = "SERVER"
    PROCESS = "PROCESS"
    CONNECTION = "CONNECTION"
    APPLICATION = "APPLICATION"

