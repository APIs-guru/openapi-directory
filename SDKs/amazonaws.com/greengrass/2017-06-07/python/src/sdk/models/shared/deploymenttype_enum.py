from dataclasses import dataclass, field
from enum import Enum

class DeploymentTypeEnum(str, Enum):
    NEW_DEPLOYMENT = "NewDeployment"
    REDEPLOYMENT = "Redeployment"
    RESET_DEPLOYMENT = "ResetDeployment"
    FORCE_RESET_DEPLOYMENT = "ForceResetDeployment"

