from dataclasses import dataclass, field
from enum import Enum

class ChallengeNameEnum(str, Enum):
    PASSWORD = "Password"
    MFA = "Mfa"

