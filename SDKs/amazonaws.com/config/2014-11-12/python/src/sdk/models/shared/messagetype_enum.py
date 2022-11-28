from dataclasses import dataclass, field
from enum import Enum

class MessageTypeEnum(str, Enum):
    CONFIGURATION_ITEM_CHANGE_NOTIFICATION = "ConfigurationItemChangeNotification"
    CONFIGURATION_SNAPSHOT_DELIVERY_COMPLETED = "ConfigurationSnapshotDeliveryCompleted"
    SCHEDULED_NOTIFICATION = "ScheduledNotification"
    OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFICATION = "OversizedConfigurationItemChangeNotification"

