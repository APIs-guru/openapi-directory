from dataclasses import dataclass, field
from typing import Enum

class InstanceCollectionTypeEnum(str, Enum):
    INSTANCE_FLEET = "INSTANCE_FLEET"
    INSTANCE_GROUP = "INSTANCE_GROUP"

