from dataclasses import dataclass, field
from enum import Enum

class WebhookFilterTypeEnum(str, Enum):
    EVENT = "EVENT"
    BASE_REF = "BASE_REF"
    HEAD_REF = "HEAD_REF"
    ACTOR_ACCOUNT_ID = "ACTOR_ACCOUNT_ID"
    FILE_PATH = "FILE_PATH"
    COMMIT_MESSAGE = "COMMIT_MESSAGE"

