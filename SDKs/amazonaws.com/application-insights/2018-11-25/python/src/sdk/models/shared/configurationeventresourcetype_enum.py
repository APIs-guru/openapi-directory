from dataclasses import dataclass, field
from typing import Enum

class ConfigurationEventResourceTypeEnum(str, Enum):
    CLOUDWATCH_ALARM = "CLOUDWATCH_ALARM"
    CLOUDWATCH_LOG = "CLOUDWATCH_LOG"
    CLOUDFORMATION = "CLOUDFORMATION"
    SSM_ASSOCIATION = "SSM_ASSOCIATION"

