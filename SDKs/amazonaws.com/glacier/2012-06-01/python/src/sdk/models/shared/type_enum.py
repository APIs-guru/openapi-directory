from dataclasses import dataclass, field
from typing import Enum

class TypeEnum(str, Enum):
    AMAZON_CUSTOMER_BY_EMAIL = "AmazonCustomerByEmail"
    CANONICAL_USER = "CanonicalUser"
    GROUP = "Group"

