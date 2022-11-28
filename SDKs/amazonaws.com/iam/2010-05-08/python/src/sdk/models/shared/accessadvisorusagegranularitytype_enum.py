from dataclasses import dataclass, field
from enum import Enum

class AccessAdvisorUsageGranularityTypeEnum(str, Enum):
    SERVICE_LEVEL = "SERVICE_LEVEL"
    ACTION_LEVEL = "ACTION_LEVEL"

