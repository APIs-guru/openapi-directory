from dataclasses import dataclass, field
from typing import Enum

class DeploymentReadyActionEnum(str, Enum):
    CONTINUE_DEPLOYMENT = "CONTINUE_DEPLOYMENT"
    STOP_DEPLOYMENT = "STOP_DEPLOYMENT"

