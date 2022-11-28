from dataclasses import dataclass, field
from enum import Enum

class FilterNameEnum(str, Enum):
    FINDING = "Finding"
    FINDING_REASON_CODES = "FindingReasonCodes"
    RECOMMENDATION_SOURCE_TYPE = "RecommendationSourceType"

