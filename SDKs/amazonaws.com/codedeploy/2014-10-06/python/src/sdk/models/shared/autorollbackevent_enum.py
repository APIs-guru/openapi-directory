from dataclasses import dataclass, field
from typing import Enum

class AutoRollbackEventEnum(str, Enum):
    DEPLOYMENT_FAILURE = "DEPLOYMENT_FAILURE"
    DEPLOYMENT_STOP_ON_ALARM = "DEPLOYMENT_STOP_ON_ALARM"
    DEPLOYMENT_STOP_ON_REQUEST = "DEPLOYMENT_STOP_ON_REQUEST"

