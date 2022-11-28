from dataclasses import dataclass, field
from enum import Enum

class DeploymentFailureHandlingPolicyEnum(str, Enum):
    ROLLBACK = "ROLLBACK"
    DO_NOTHING = "DO_NOTHING"

