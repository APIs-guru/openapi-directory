from dataclasses import dataclass, field
from typing import Enum

class DeploymentStatusEnum(str, Enum):
    CREATED = "Created"
    QUEUED = "Queued"
    IN_PROGRESS = "InProgress"
    BAKING = "Baking"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"
    STOPPED = "Stopped"
    READY = "Ready"

