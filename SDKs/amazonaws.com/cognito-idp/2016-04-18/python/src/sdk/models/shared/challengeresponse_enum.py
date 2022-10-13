from dataclasses import dataclass, field
from typing import Enum

class ChallengeResponseEnum(str, Enum):
    SUCCESS = "Success"
    FAILURE = "Failure"

