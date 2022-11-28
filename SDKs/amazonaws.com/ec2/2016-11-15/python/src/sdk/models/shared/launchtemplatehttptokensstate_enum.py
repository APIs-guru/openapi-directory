from dataclasses import dataclass, field
from enum import Enum

class LaunchTemplateHTTPTokensStateEnum(str, Enum):
    OPTIONAL = "optional"
    REQUIRED = "required"

