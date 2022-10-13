from dataclasses import dataclass, field
from typing import Enum

class EnvironmentVariableTypeEnum(str, Enum):
    PLAINTEXT = "PLAINTEXT"
    PARAMETER_STORE = "PARAMETER_STORE"
    SECRETS_MANAGER = "SECRETS_MANAGER"

