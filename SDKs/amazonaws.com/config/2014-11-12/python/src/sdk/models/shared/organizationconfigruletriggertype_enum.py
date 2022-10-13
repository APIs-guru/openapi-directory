from dataclasses import dataclass, field
from typing import Enum

class OrganizationConfigRuleTriggerTypeEnum(str, Enum):
    CONFIGURATION_ITEM_CHANGE_NOTIFICATION = "ConfigurationItemChangeNotification"
    OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFICATION = "OversizedConfigurationItemChangeNotification"
    SCHEDULED_NOTIFICATION = "ScheduledNotification"

