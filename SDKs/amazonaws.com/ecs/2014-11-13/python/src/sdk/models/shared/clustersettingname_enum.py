from dataclasses import dataclass, field
from typing import Enum

class ClusterSettingNameEnum(str, Enum):
    CONTAINER_INSIGHTS = "containerInsights"

