from dataclasses import dataclass, field
from enum import Enum

class AuthModeEnum(str, Enum):
    SSO = "SSO"
    IAM = "IAM"

