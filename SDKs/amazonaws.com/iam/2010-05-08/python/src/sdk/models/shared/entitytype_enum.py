from dataclasses import dataclass, field
from typing import Enum

class EntityTypeEnum(str, Enum):
    USER = "User"
    ROLE = "Role"
    GROUP = "Group"
    LOCAL_MANAGED_POLICY = "LocalManagedPolicy"
    AWS_MANAGED_POLICY = "AWSManagedPolicy"

