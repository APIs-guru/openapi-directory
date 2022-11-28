from dataclasses import dataclass, field
from enum import Enum

class ExecutionResultCodeEnum(str, Enum):
    PARSING_FAILED = "PARSING_FAILED"
    VPC_ENDPOINT_SETUP_FAILED = "VPC_ENDPOINT_SETUP_FAILED"

