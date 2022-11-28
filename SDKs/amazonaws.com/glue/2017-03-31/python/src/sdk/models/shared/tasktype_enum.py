from dataclasses import dataclass, field
from enum import Enum

class TaskTypeEnum(str, Enum):
    EVALUATION = "EVALUATION"
    LABELING_SET_GENERATION = "LABELING_SET_GENERATION"
    IMPORT_LABELS = "IMPORT_LABELS"
    EXPORT_LABELS = "EXPORT_LABELS"
    FIND_MATCHES = "FIND_MATCHES"

