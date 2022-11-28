from dataclasses import dataclass, field
from enum import Enum

class PipelineExecutionStartConditionEnum(str, Enum):
    EXPRESSION_MATCH_ONLY = "EXPRESSION_MATCH_ONLY"
    EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE = "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE"

