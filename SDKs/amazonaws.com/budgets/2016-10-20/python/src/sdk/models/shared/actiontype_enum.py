from dataclasses import dataclass, field
from typing import Enum

class ActionTypeEnum(str, Enum):
    APPLY_IAM_POLICY = "APPLY_IAM_POLICY"
    APPLY_SCP_POLICY = "APPLY_SCP_POLICY"
    RUN_SSM_DOCUMENTS = "RUN_SSM_DOCUMENTS"

