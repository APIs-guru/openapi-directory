from dataclasses import dataclass, field
from typing import Enum

class ResourceAttributeTypeEnum(str, Enum):
    IPV4_ADDRESS = "IPV4_ADDRESS"
    IPV6_ADDRESS = "IPV6_ADDRESS"
    MAC_ADDRESS = "MAC_ADDRESS"
    FQDN = "FQDN"
    VM_MANAGER_ID = "VM_MANAGER_ID"
    VM_MANAGED_OBJECT_REFERENCE = "VM_MANAGED_OBJECT_REFERENCE"
    VM_NAME = "VM_NAME"
    VM_PATH = "VM_PATH"
    BIOS_ID = "BIOS_ID"
    MOTHERBOARD_SERIAL_NUMBER = "MOTHERBOARD_SERIAL_NUMBER"

