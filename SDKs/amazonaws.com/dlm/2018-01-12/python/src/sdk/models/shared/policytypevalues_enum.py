from dataclasses import dataclass, field
from typing import Enum

class PolicyTypeValuesEnum(str, Enum):
    EBS_SNAPSHOT_MANAGEMENT = "EBS_SNAPSHOT_MANAGEMENT"
    IMAGE_MANAGEMENT = "IMAGE_MANAGEMENT"
    EVENT_BASED_POLICY = "EVENT_BASED_POLICY"

