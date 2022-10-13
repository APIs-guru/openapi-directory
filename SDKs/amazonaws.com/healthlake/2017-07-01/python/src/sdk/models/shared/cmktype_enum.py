from dataclasses import dataclass, field
from typing import Enum

class CmkTypeEnum(str, Enum):
    CUSTOMER_MANAGED_KMS_KEY = "CUSTOMER_MANAGED_KMS_KEY"
    AWS_OWNED_KMS_KEY = "AWS_OWNED_KMS_KEY"

