from dataclasses import dataclass, field
from enum import Enum

class ProviderTypeEnum(str, Enum):
    BITBUCKET = "Bitbucket"
    GIT_HUB = "GitHub"
    GIT_HUB_ENTERPRISE_SERVER = "GitHubEnterpriseServer"

