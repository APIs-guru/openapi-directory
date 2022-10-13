from dataclasses import dataclass, field
from typing import Enum

class EmailSendingAccountTypeEnum(str, Enum):
    COGNITO_DEFAULT = "COGNITO_DEFAULT"
    DEVELOPER = "DEVELOPER"

