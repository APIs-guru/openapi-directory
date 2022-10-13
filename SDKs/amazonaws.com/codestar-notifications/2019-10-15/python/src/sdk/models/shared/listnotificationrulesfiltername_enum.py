from dataclasses import dataclass, field
from typing import Enum,List

class ListNotificationRulesFilterNameEnum(str, Enum):
    EVENT_TYPE_ID = "EVENT_TYPE_ID"
    CREATED_BY = "CREATED_BY"
    RESOURCE = "RESOURCE"
    TARGET_ADDRESS = "TARGET_ADDRESS"

