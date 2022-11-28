from dataclasses import dataclass, field
from enum import Enum

class SourceTypeEnum(str, Enum):
    AWS_CLOUDTRAIL = "AWS_Cloudtrail"
    AWS_CONFIG = "AWS_Config"
    AWS_SECURITY_HUB = "AWS_Security_Hub"
    AWS_API_CALL = "AWS_API_Call"
    MANUAL = "MANUAL"

