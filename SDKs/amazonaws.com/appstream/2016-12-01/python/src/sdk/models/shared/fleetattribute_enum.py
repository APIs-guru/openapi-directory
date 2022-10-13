from dataclasses import dataclass, field
from typing import Enum

class FleetAttributeEnum(str, Enum):
    VPC_CONFIGURATION = "VPC_CONFIGURATION"
    VPC_CONFIGURATION_SECURITY_GROUP_IDS = "VPC_CONFIGURATION_SECURITY_GROUP_IDS"
    DOMAIN_JOIN_INFO = "DOMAIN_JOIN_INFO"
    IAM_ROLE_ARN = "IAM_ROLE_ARN"

