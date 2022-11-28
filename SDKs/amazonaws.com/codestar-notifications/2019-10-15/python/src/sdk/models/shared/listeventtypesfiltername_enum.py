from dataclasses import dataclass, field
from enum import Enum

class ListEventTypesFilterNameEnum(str, Enum):
    RESOURCE_TYPE = "RESOURCE_TYPE"
    SERVICE_NAME = "SERVICE_NAME"

