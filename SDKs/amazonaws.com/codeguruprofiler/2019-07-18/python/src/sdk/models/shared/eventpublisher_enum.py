from dataclasses import dataclass, field
from typing import Enum

class EventPublisherEnum(str, Enum):
    ANOMALY_DETECTION = "AnomalyDetection"

