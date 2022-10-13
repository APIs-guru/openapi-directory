from dataclasses import dataclass, field
from typing import Enum

class DeploymentTypeEnum(str, Enum):
    NEW_DEPLOYMENT = "NewDeployment"
    REDEPLOYMENT = "Redeployment"
    RESET_DEPLOYMENT = "ResetDeployment"
    FORCE_RESET_DEPLOYMENT = "ForceResetDeployment"

