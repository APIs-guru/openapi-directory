from dataclasses import dataclass, field
from typing import Enum

class AssessmentRunNotificationSnsStatusCodeEnum(str, Enum):
    SUCCESS = "SUCCESS"
    TOPIC_DOES_NOT_EXIST = "TOPIC_DOES_NOT_EXIST"
    ACCESS_DENIED = "ACCESS_DENIED"
    INTERNAL_ERROR = "INTERNAL_ERROR"

