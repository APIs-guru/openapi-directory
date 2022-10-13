from dataclasses import dataclass, field
from typing import Enum,List

class ListEventTypesFilterNameEnum(str, Enum):
    RESOURCE_TYPE = "RESOURCE_TYPE"
    SERVICE_NAME = "SERVICE_NAME"

