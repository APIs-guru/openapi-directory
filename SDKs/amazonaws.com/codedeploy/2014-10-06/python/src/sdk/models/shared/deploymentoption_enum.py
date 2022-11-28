from dataclasses import dataclass, field
from enum import Enum

class DeploymentOptionEnum(str, Enum):
    WITH_TRAFFIC_CONTROL = "WITH_TRAFFIC_CONTROL"
    WITHOUT_TRAFFIC_CONTROL = "WITHOUT_TRAFFIC_CONTROL"

