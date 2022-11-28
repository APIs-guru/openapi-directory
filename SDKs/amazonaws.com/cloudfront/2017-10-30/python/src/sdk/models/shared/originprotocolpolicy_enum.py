from dataclasses import dataclass, field
from enum import Enum

class OriginProtocolPolicyEnum(str, Enum):
    HTTP_ONLY = "http-only"
    MATCH_VIEWER = "match-viewer"
    HTTPS_ONLY = "https-only"

