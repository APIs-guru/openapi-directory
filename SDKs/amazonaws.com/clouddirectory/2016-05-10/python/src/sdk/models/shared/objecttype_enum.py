from dataclasses import dataclass, field
from enum import Enum

class ObjectTypeEnum(str, Enum):
    NODE = "NODE"
    LEAF_NODE = "LEAF_NODE"
    POLICY = "POLICY"
    INDEX = "INDEX"

