from dataclasses import dataclass, field
from enum import Enum

class PolicySourceTypeEnum(str, Enum):
    USER = "user"
    GROUP = "group"
    ROLE = "role"
    AWS_MANAGED = "aws-managed"
    USER_MANAGED = "user-managed"
    RESOURCE = "resource"
    NONE = "none"

