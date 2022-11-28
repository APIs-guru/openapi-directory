from dataclasses import dataclass, field
from enum import Enum

class ConfigurationSourceEnum(str, Enum):
    REPOSITORY = "REPOSITORY"
    API = "API"

