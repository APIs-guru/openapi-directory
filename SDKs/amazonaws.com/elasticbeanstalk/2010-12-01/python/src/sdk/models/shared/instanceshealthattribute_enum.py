from dataclasses import dataclass, field
from typing import Enum

class InstancesHealthAttributeEnum(str, Enum):
    HEALTH_STATUS = "HealthStatus"
    COLOR = "Color"
    CAUSES = "Causes"
    APPLICATION_METRICS = "ApplicationMetrics"
    REFRESHED_AT = "RefreshedAt"
    LAUNCHED_AT = "LaunchedAt"
    SYSTEM = "System"
    DEPLOYMENT = "Deployment"
    AVAILABILITY_ZONE = "AvailabilityZone"
    INSTANCE_TYPE = "InstanceType"
    ALL = "All"

