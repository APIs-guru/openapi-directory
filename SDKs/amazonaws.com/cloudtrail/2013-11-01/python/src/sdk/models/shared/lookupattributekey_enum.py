from dataclasses import dataclass, field
from enum import Enum

class LookupAttributeKeyEnum(str, Enum):
    EVENT_ID = "EventId"
    EVENT_NAME = "EventName"
    READ_ONLY = "ReadOnly"
    USERNAME = "Username"
    RESOURCE_TYPE = "ResourceType"
    RESOURCE_NAME = "ResourceName"
    EVENT_SOURCE = "EventSource"
    ACCESS_KEY_ID = "AccessKeyId"

