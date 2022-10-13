from dataclasses import dataclass, field
from typing import Enum

class DeploymentTypeEnum(str, Enum):
    IN_PLACE = "IN_PLACE"
    BLUE_GREEN = "BLUE_GREEN"

