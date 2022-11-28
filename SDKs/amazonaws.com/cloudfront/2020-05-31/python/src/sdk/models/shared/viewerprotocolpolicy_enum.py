from dataclasses import dataclass, field
from enum import Enum

class ViewerProtocolPolicyEnum(str, Enum):
    ALLOW_ALL = "allow-all"
    HTTPS_ONLY = "https-only"
    REDIRECT_TO_HTTPS = "redirect-to-https"

