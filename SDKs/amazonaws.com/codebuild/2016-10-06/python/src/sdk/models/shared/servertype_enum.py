from dataclasses import dataclass, field
from typing import Enum

class ServerTypeEnum(str, Enum):
    GITHUB = "GITHUB"
    BITBUCKET = "BITBUCKET"
    GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE"

