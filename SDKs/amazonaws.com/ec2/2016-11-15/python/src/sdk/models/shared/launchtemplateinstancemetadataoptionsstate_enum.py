from dataclasses import dataclass, field
from enum import Enum

class LaunchTemplateInstanceMetadataOptionsStateEnum(str, Enum):
    PENDING = "pending"
    APPLIED = "applied"

