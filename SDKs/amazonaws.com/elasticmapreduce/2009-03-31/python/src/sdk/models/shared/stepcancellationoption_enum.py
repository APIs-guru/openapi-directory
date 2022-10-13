from dataclasses import dataclass, field
from typing import Enum

class StepCancellationOptionEnum(str, Enum):
    SEND_INTERRUPT = "SEND_INTERRUPT"
    TERMINATE_PROCESS = "TERMINATE_PROCESS"

