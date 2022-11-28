from dataclasses import dataclass, field
from enum import Enum

class InterfacePermissionTypeEnum(str, Enum):
    INSTANCE_ATTACH = "INSTANCE-ATTACH"
    EIP_ASSOCIATE = "EIP-ASSOCIATE"

