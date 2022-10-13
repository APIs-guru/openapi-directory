from dataclasses import dataclass, field
from typing import Enum

class EbsMetricNameEnum(str, Enum):
    VOLUME_READ_OPS_PER_SECOND = "VolumeReadOpsPerSecond"
    VOLUME_WRITE_OPS_PER_SECOND = "VolumeWriteOpsPerSecond"
    VOLUME_READ_BYTES_PER_SECOND = "VolumeReadBytesPerSecond"
    VOLUME_WRITE_BYTES_PER_SECOND = "VolumeWriteBytesPerSecond"

