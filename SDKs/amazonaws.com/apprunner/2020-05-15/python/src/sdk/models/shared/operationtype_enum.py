from dataclasses import dataclass, field
from enum import Enum

class OperationTypeEnum(str, Enum):
    START_DEPLOYMENT = "START_DEPLOYMENT"
    CREATE_SERVICE = "CREATE_SERVICE"
    PAUSE_SERVICE = "PAUSE_SERVICE"
    RESUME_SERVICE = "RESUME_SERVICE"
    DELETE_SERVICE = "DELETE_SERVICE"

