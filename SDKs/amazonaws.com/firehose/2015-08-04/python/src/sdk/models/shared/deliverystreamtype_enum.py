from dataclasses import dataclass, field
from enum import Enum

class DeliveryStreamTypeEnum(str, Enum):
    DIRECT_PUT = "DirectPut"
    KINESIS_STREAM_AS_SOURCE = "KinesisStreamAsSource"

