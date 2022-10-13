from dataclasses import dataclass, field
from typing import Enum

class DeploymentControllerTypeEnum(str, Enum):
    ECS = "ECS"
    CODE_DEPLOY = "CODE_DEPLOY"
    EXTERNAL = "EXTERNAL"

