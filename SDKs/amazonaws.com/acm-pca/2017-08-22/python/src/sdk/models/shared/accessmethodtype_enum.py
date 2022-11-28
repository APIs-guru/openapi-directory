from dataclasses import dataclass, field
from enum import Enum

class AccessMethodTypeEnum(str, Enum):
    CA_REPOSITORY = "CA_REPOSITORY"
    RESOURCE_PKI_MANIFEST = "RESOURCE_PKI_MANIFEST"
    RESOURCE_PKI_NOTIFY = "RESOURCE_PKI_NOTIFY"

