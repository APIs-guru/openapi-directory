from dataclasses import dataclass, field
from enum import Enum

class CredentialProviderTypeEnum(str, Enum):
    SECRETS_MANAGER = "SECRETS_MANAGER"

