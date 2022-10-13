from dataclasses import dataclass, field
from typing import Enum

class PolicyTypeEnum(str, Enum):
    STEP_SCALING = "StepScaling"
    TARGET_TRACKING_SCALING = "TargetTrackingScaling"

