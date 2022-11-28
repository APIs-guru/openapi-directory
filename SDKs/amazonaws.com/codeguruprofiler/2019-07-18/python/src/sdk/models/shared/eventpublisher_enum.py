from dataclasses import dataclass, field
from enum import Enum

class EventPublisherEnum(str, Enum):
    ANOMALY_DETECTION = "AnomalyDetection"

