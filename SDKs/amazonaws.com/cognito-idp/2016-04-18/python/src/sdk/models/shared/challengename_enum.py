from dataclasses import dataclass, field
from typing import Enum

class ChallengeNameEnum(str, Enum):
    PASSWORD = "Password"
    MFA = "Mfa"

