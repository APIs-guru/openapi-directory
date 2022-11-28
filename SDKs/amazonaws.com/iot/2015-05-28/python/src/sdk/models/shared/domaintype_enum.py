from dataclasses import dataclass, field
from enum import Enum

class DomainTypeEnum(str, Enum):
    ENDPOINT = "ENDPOINT"
    AWS_MANAGED = "AWS_MANAGED"
    CUSTOMER_MANAGED = "CUSTOMER_MANAGED"

