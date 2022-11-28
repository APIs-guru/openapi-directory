from dataclasses import dataclass, field
from enum import Enum

class ActionOnFailureEnum(str, Enum):
    TERMINATE_JOB_FLOW = "TERMINATE_JOB_FLOW"
    TERMINATE_CLUSTER = "TERMINATE_CLUSTER"
    CANCEL_AND_WAIT = "CANCEL_AND_WAIT"
    CONTINUE = "CONTINUE"

