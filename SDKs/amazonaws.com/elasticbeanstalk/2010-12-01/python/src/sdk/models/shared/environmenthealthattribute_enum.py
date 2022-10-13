from dataclasses import dataclass, field
from typing import Enum

class EnvironmentHealthAttributeEnum(str, Enum):
    STATUS = "Status"
    COLOR = "Color"
    CAUSES = "Causes"
    APPLICATION_METRICS = "ApplicationMetrics"
    INSTANCES_HEALTH = "InstancesHealth"
    ALL = "All"
    HEALTH_STATUS = "HealthStatus"
    REFRESHED_AT = "RefreshedAt"

