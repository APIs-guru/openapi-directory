from dataclasses import dataclass, field
from typing import Enum

class ConfigurationItemStatusEnum(str, Enum):
    OK = "OK"
    RESOURCE_DISCOVERED = "ResourceDiscovered"
    RESOURCE_NOT_RECORDED = "ResourceNotRecorded"
    RESOURCE_DELETED = "ResourceDeleted"
    RESOURCE_DELETED_NOT_RECORDED = "ResourceDeletedNotRecorded"

