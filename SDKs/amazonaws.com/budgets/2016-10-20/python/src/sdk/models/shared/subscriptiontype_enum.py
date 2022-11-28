from dataclasses import dataclass, field
from enum import Enum

class SubscriptionTypeEnum(str, Enum):
    SNS = "SNS"
    EMAIL = "EMAIL"

