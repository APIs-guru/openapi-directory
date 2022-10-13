from dataclasses import dataclass, field
from typing import Enum

class ConfigurationSourceEnum(str, Enum):
    REPOSITORY = "REPOSITORY"
    API = "API"

