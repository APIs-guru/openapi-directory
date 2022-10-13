from dataclasses import dataclass, field
from typing import Enum

class DeliveryStreamTypeEnum(str, Enum):
    DIRECT_PUT = "DirectPut"
    KINESIS_STREAM_AS_SOURCE = "KinesisStreamAsSource"

