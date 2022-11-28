from dataclasses import dataclass, field
from enum import Enum

class LifecycleErrorCodeEnum(str, Enum):
    SUCCESS = "Success"
    SCRIPT_MISSING = "ScriptMissing"
    SCRIPT_NOT_EXECUTABLE = "ScriptNotExecutable"
    SCRIPT_TIMED_OUT = "ScriptTimedOut"
    SCRIPT_FAILED = "ScriptFailed"
    UNKNOWN_ERROR = "UnknownError"

