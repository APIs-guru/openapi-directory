from dataclasses import dataclass, field
from typing import Enum

class DeploymentFailureHandlingPolicyEnum(str, Enum):
    ROLLBACK = "ROLLBACK"
    DO_NOTHING = "DO_NOTHING"

