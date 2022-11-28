from dataclasses import dataclass, field
from enum import Enum

class StorageVirtualMachineLifecycleEnum(str, Enum):
    CREATED = "CREATED"
    CREATING = "CREATING"
    DELETING = "DELETING"
    FAILED = "FAILED"
    MISCONFIGURED = "MISCONFIGURED"
    PENDING = "PENDING"

