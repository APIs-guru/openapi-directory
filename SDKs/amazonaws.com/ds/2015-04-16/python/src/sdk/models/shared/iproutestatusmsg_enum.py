from dataclasses import dataclass, field
from enum import Enum

class IPRouteStatusMsgEnum(str, Enum):
    ADDING = "Adding"
    ADDED = "Added"
    REMOVING = "Removing"
    REMOVED = "Removed"
    ADD_FAILED = "AddFailed"
    REMOVE_FAILED = "RemoveFailed"

