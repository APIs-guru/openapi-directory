from dataclasses import dataclass, field
from typing import Enum

class EnvironmentTypeEnum(str, Enum):
    SSH = "ssh"
    EC2 = "ec2"

