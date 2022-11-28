from dataclasses import dataclass, field
from enum import Enum

class ActionCategoryEnum(str, Enum):
    SOURCE = "Source"
    BUILD = "Build"
    DEPLOY = "Deploy"
    TEST = "Test"
    INVOKE = "Invoke"
    APPROVAL = "Approval"

