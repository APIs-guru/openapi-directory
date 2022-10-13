from dataclasses import dataclass, field
from typing import Enum

class EventClassEnum(str, Enum):
    INFRASTRUCTURE = "INFRASTRUCTURE"
    DEPLOYMENT = "DEPLOYMENT"
    SECURITY_CHANGE = "SECURITY_CHANGE"
    CONFIG_CHANGE = "CONFIG_CHANGE"
    SCHEMA_CHANGE = "SCHEMA_CHANGE"

