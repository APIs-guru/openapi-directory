from dataclasses import dataclass, field
from enum import Enum

class TriggerEventTypeEnum(str, Enum):
    DEPLOYMENT_START = "DeploymentStart"
    DEPLOYMENT_SUCCESS = "DeploymentSuccess"
    DEPLOYMENT_FAILURE = "DeploymentFailure"
    DEPLOYMENT_STOP = "DeploymentStop"
    DEPLOYMENT_ROLLBACK = "DeploymentRollback"
    DEPLOYMENT_READY = "DeploymentReady"
    INSTANCE_START = "InstanceStart"
    INSTANCE_SUCCESS = "InstanceSuccess"
    INSTANCE_FAILURE = "InstanceFailure"
    INSTANCE_READY = "InstanceReady"

