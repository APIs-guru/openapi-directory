from dataclasses import dataclass, field
from enum import Enum

class DomainEnum(str, Enum):
    RETAIL = "RETAIL"
    CUSTOM = "CUSTOM"
    INVENTORY_PLANNING = "INVENTORY_PLANNING"
    EC2_CAPACITY = "EC2_CAPACITY"
    WORK_FORCE = "WORK_FORCE"
    WEB_TRAFFIC = "WEB_TRAFFIC"
    METRICS = "METRICS"

