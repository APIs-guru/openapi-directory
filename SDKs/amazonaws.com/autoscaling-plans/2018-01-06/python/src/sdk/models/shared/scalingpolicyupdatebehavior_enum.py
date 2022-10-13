from dataclasses import dataclass, field
from typing import Enum

class ScalingPolicyUpdateBehaviorEnum(str, Enum):
    KEEP_EXTERNAL_POLICIES = "KeepExternalPolicies"
    REPLACE_EXTERNAL_POLICIES = "ReplaceExternalPolicies"

