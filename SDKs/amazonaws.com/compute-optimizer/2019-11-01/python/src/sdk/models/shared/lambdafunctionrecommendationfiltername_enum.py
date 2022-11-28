from dataclasses import dataclass, field
from enum import Enum

class LambdaFunctionRecommendationFilterNameEnum(str, Enum):
    FINDING = "Finding"
    FINDING_REASON_CODE = "FindingReasonCode"

