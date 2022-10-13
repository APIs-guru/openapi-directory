from dataclasses import dataclass, field
from typing import Enum

class LambdaFunctionRecommendationFilterNameEnum(str, Enum):
    FINDING = "Finding"
    FINDING_REASON_CODE = "FindingReasonCode"

