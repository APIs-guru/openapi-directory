from dataclasses import dataclass, field
from enum import Enum

class OriginRequestPolicyHeaderBehaviorEnum(str, Enum):
    NONE = "none"
    WHITELIST = "whitelist"
    ALL_VIEWER = "allViewer"
    ALL_VIEWER_AND_WHITELIST_CLOUD_FRONT = "allViewerAndWhitelistCloudFront"

