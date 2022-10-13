from dataclasses import dataclass, field
from typing import Enum

class LambdaIsolationModeEnum(str, Enum):
    GREENGRASS_CONTAINER = "GreengrassContainer"
    NO_CONTAINER = "NoContainer"

