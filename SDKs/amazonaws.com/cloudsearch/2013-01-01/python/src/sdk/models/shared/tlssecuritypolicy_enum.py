from dataclasses import dataclass, field
from enum import Enum

class TLSSecurityPolicyEnum(str, Enum):
    POLICY_MIN_TLS_1_0_2019_07 = "Policy-Min-TLS-1-0-2019-07"
    POLICY_MIN_TLS_1_2_2019_07 = "Policy-Min-TLS-1-2-2019-07"

