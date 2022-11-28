from dataclasses import dataclass, field
from enum import Enum

class DestinationTypeEnum(str, Enum):
    CLOUDWATCH_LOGS = "cloudwatch-logs"
    KINESIS_FIREHOSE = "kinesis-firehose"

