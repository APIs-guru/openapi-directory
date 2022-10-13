from dataclasses import dataclass, field
from typing import Enum

class DeploymentTargetTypeEnum(str, Enum):
    INSTANCE_TARGET = "InstanceTarget"
    LAMBDA_TARGET = "LambdaTarget"
    ECS_TARGET = "ECSTarget"
    CLOUD_FORMATION_TARGET = "CloudFormationTarget"

