from dataclasses import dataclass, field
from enum import Enum

class ScopeEnum(str, Enum):
    AVAILABILITY_ZONE = "Availability Zone"
    REGION = "Region"

