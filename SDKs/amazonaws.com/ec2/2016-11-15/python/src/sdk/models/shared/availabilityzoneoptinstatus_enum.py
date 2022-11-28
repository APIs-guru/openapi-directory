from dataclasses import dataclass, field
from enum import Enum

class AvailabilityZoneOptInStatusEnum(str, Enum):
    OPT_IN_NOT_REQUIRED = "opt-in-not-required"
    OPTED_IN = "opted-in"
    NOT_OPTED_IN = "not-opted-in"

