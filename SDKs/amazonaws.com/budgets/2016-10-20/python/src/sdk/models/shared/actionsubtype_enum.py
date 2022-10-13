from dataclasses import dataclass, field
from typing import Enum

class ActionSubTypeEnum(str, Enum):
    STOP_EC2_INSTANCES = "STOP_EC2_INSTANCES"
    STOP_RDS_INSTANCES = "STOP_RDS_INSTANCES"

