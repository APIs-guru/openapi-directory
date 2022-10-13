from dataclasses import dataclass, field
from typing import Enum

class OAuthFlowTypeEnum(str, Enum):
    CODE = "code"
    IMPLICIT = "implicit"
    CLIENT_CREDENTIALS = "client_credentials"

