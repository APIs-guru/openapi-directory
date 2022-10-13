from dataclasses import dataclass, field
from typing import Enum

class DeploymentComponentUpdatePolicyActionEnum(str, Enum):
    NOTIFY_COMPONENTS = "NOTIFY_COMPONENTS"
    SKIP_NOTIFY_COMPONENTS = "SKIP_NOTIFY_COMPONENTS"

