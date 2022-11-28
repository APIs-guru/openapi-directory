from dataclasses import dataclass, field
from enum import Enum

class EventTypeEnum(str, Enum):
    VIEWER_REQUEST = "viewer-request"
    VIEWER_RESPONSE = "viewer-response"
    ORIGIN_REQUEST = "origin-request"
    ORIGIN_RESPONSE = "origin-response"

