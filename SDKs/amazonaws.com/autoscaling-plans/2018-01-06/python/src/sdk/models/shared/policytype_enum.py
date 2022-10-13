from dataclasses import dataclass, field
from typing import Enum

class PolicyTypeEnum(str, Enum):
    TARGET_TRACKING_SCALING = "TargetTrackingScaling"

