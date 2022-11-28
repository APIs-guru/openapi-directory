from dataclasses import dataclass, field
from enum import Enum

class ConfigurationSetAttributeEnum(str, Enum):
    EVENT_DESTINATIONS = "eventDestinations"
    TRACKING_OPTIONS = "trackingOptions"
    DELIVERY_OPTIONS = "deliveryOptions"
    REPUTATION_OPTIONS = "reputationOptions"

