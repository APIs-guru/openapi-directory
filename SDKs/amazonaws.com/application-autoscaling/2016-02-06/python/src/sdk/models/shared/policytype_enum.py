from dataclasses import dataclass, field
from enum import Enum

class PolicyTypeEnum(str, Enum):
    STEP_SCALING = "StepScaling"
    TARGET_TRACKING_SCALING = "TargetTrackingScaling"

