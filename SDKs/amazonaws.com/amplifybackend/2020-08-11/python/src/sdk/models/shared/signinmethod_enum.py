from dataclasses import dataclass, field
from enum import Enum

class SignInMethodEnum(str, Enum):
    EMAIL = "EMAIL"
    EMAIL_AND_PHONE_NUMBER = "EMAIL_AND_PHONE_NUMBER"
    PHONE_NUMBER = "PHONE_NUMBER"
    USERNAME = "USERNAME"

