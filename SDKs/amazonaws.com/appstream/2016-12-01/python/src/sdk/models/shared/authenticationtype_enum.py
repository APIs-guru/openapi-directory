from dataclasses import dataclass, field
from typing import Enum

class AuthenticationTypeEnum(str, Enum):
    API = "API"
    SAML = "SAML"
    USERPOOL = "USERPOOL"

