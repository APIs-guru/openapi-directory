from dataclasses import dataclass, field
from enum import Enum

class CmkTypeEnum(str, Enum):
    CUSTOMER_MANAGED_KMS_KEY = "CUSTOMER_MANAGED_KMS_KEY"
    AWS_OWNED_KMS_KEY = "AWS_OWNED_KMS_KEY"

