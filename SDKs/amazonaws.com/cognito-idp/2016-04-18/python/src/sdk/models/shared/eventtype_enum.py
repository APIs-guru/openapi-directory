from dataclasses import dataclass, field
from typing import Enum

class EventTypeEnum(str, Enum):
    SIGN_IN = "SignIn"
    SIGN_UP = "SignUp"
    FORGOT_PASSWORD = "ForgotPassword"

