from dataclasses import dataclass, field
from enum import Enum

class AllowsMultipleInstanceTypesEnum(str, Enum):
    ON = "on"
    OFF = "off"

