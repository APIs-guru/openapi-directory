from dataclasses import dataclass, field
from enum import Enum

class RoleTypeEnum(str, Enum):
    PROCESS_OWNER = "PROCESS_OWNER"
    RESOURCE_OWNER = "RESOURCE_OWNER"

