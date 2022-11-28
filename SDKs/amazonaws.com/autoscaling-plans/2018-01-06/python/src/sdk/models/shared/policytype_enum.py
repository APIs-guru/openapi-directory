from dataclasses import dataclass, field
from enum import Enum

class PolicyTypeEnum(str, Enum):
    TARGET_TRACKING_SCALING = "TargetTrackingScaling"

