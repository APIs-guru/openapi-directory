from dataclasses import dataclass, field
from enum import Enum

class PlatformDifferenceEnum(str, Enum):
    HYPERVISOR = "Hypervisor"
    NETWORK_INTERFACE = "NetworkInterface"
    STORAGE_INTERFACE = "StorageInterface"
    INSTANCE_STORE_AVAILABILITY = "InstanceStoreAvailability"
    VIRTUALIZATION_TYPE = "VirtualizationType"
    ARCHITECTURE = "Architecture"

