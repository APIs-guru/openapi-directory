from dataclasses import dataclass, field
from enum import Enum

class PrefixListStateEnum(str, Enum):
    CREATE_IN_PROGRESS = "create-in-progress"
    CREATE_COMPLETE = "create-complete"
    CREATE_FAILED = "create-failed"
    MODIFY_IN_PROGRESS = "modify-in-progress"
    MODIFY_COMPLETE = "modify-complete"
    MODIFY_FAILED = "modify-failed"
    RESTORE_IN_PROGRESS = "restore-in-progress"
    RESTORE_COMPLETE = "restore-complete"
    RESTORE_FAILED = "restore-failed"
    DELETE_IN_PROGRESS = "delete-in-progress"
    DELETE_COMPLETE = "delete-complete"
    DELETE_FAILED = "delete-failed"

