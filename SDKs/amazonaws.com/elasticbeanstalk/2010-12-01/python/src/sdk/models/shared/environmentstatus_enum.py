from dataclasses import dataclass, field
from enum import Enum

class EnvironmentStatusEnum(str, Enum):
    ABORTING = "Aborting"
    LAUNCHING = "Launching"
    UPDATING = "Updating"
    LINKING_FROM = "LinkingFrom"
    LINKING_TO = "LinkingTo"
    READY = "Ready"
    TERMINATING = "Terminating"
    TERMINATED = "Terminated"

