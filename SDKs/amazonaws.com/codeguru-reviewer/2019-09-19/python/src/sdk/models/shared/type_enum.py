from dataclasses import dataclass, field
from typing import Enum

class TypeEnum(str, Enum):
    PULL_REQUEST = "PullRequest"
    REPOSITORY_ANALYSIS = "RepositoryAnalysis"

