from dataclasses import dataclass, field
from enum import Enum

class DeploymentControllerTypeEnum(str, Enum):
    ECS = "ECS"
    CODE_DEPLOY = "CODE_DEPLOY"
    EXTERNAL = "EXTERNAL"

