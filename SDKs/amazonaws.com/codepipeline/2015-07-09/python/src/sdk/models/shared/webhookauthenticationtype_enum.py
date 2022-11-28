from dataclasses import dataclass, field
from enum import Enum

class WebhookAuthenticationTypeEnum(str, Enum):
    GITHUB_HMAC = "GITHUB_HMAC"
    IP = "IP"
    UNAUTHENTICATED = "UNAUTHENTICATED"

