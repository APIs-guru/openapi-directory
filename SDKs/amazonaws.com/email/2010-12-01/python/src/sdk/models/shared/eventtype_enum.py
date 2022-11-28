from dataclasses import dataclass, field
from enum import Enum

class EventTypeEnum(str, Enum):
    SEND = "send"
    REJECT = "reject"
    BOUNCE = "bounce"
    COMPLAINT = "complaint"
    DELIVERY = "delivery"
    OPEN = "open"
    CLICK = "click"
    RENDERING_FAILURE = "renderingFailure"

