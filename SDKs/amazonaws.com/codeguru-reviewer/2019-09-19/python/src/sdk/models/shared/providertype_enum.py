from dataclasses import dataclass, field
from enum import Enum

class ProviderTypeEnum(str, Enum):
    CODE_COMMIT = "CodeCommit"
    GIT_HUB = "GitHub"
    BITBUCKET = "Bitbucket"
    GIT_HUB_ENTERPRISE_SERVER = "GitHubEnterpriseServer"
    S3_BUCKET = "S3Bucket"

