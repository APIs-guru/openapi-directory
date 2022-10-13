from dataclasses import dataclass, field
from typing import Enum,List

class ListTargetsFilterNameEnum(str, Enum):
    TARGET_TYPE = "TARGET_TYPE"
    TARGET_ADDRESS = "TARGET_ADDRESS"
    TARGET_STATUS = "TARGET_STATUS"

