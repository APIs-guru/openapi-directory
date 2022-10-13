from dataclasses import dataclass, field
from typing import Enum

class IPRouteStatusMsgEnum(str, Enum):
    ADDING = "Adding"
    ADDED = "Added"
    REMOVING = "Removing"
    REMOVED = "Removed"
    ADD_FAILED = "AddFailed"
    REMOVE_FAILED = "RemoveFailed"

