from dataclasses import dataclass, field
from enum import Enum

class PrivateConnectionProvisioningFailureCauseEnum(str, Enum):
    CONNECTOR_AUTHENTICATION = "CONNECTOR_AUTHENTICATION"
    CONNECTOR_SERVER = "CONNECTOR_SERVER"
    INTERNAL_SERVER = "INTERNAL_SERVER"
    ACCESS_DENIED = "ACCESS_DENIED"
    VALIDATION = "VALIDATION"

