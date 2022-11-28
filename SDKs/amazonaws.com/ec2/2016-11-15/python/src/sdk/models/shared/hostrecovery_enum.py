from dataclasses import dataclass, field
from enum import Enum

class HostRecoveryEnum(str, Enum):
    ON = "on"
    OFF = "off"

