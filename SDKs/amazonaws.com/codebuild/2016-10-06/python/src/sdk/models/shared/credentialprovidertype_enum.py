from dataclasses import dataclass, field
from typing import Enum

class CredentialProviderTypeEnum(str, Enum):
    SECRETS_MANAGER = "SECRETS_MANAGER"

