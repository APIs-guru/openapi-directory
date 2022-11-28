from dataclasses import dataclass, field
from enum import Enum

class AuthenticateCognitoActionConditionalBehaviorEnumEnum(str, Enum):
    DENY = "deny"
    ALLOW = "allow"
    AUTHENTICATE = "authenticate"

