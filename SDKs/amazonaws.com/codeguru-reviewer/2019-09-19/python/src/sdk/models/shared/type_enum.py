from dataclasses import dataclass, field
from enum import Enum

class TypeEnum(str, Enum):
    PULL_REQUEST = "PullRequest"
    REPOSITORY_ANALYSIS = "RepositoryAnalysis"

