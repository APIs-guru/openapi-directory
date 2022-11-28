from dataclasses import dataclass, field
from enum import Enum

class ReceiptFilterPolicyEnum(str, Enum):
    BLOCK = "Block"
    ALLOW = "Allow"

