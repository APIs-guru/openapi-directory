from dataclasses import dataclass, field
from enum import Enum

class ConnectionAuthorizationTypeEnum(str, Enum):
    BASIC = "BASIC"
    OAUTH_CLIENT_CREDENTIALS = "OAUTH_CLIENT_CREDENTIALS"
    API_KEY = "API_KEY"

