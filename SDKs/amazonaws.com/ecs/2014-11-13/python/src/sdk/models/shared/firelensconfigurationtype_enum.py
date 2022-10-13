from dataclasses import dataclass, field
from typing import Enum

class FirelensConfigurationTypeEnum(str, Enum):
    FLUENTD = "fluentd"
    FLUENTBIT = "fluentbit"

