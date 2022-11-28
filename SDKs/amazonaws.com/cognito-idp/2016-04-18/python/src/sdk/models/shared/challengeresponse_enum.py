from dataclasses import dataclass, field
from enum import Enum

class ChallengeResponseEnum(str, Enum):
    SUCCESS = "Success"
    FAILURE = "Failure"

