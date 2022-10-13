from dataclasses import dataclass, field
from typing import Enum

class ConfigurationItemTypeEnum(str, Enum):
    SERVER = "SERVER"
    PROCESS = "PROCESS"
    CONNECTION = "CONNECTION"
    APPLICATION = "APPLICATION"

