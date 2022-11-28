from dataclasses import dataclass, field
from enum import Enum

class EncryptionOptionEnum(str, Enum):
    AWS_OWNED_CMK = "AWS_OWNED_CMK"
    CUSTOMER_MANAGED_CMK = "CUSTOMER_MANAGED_CMK"

