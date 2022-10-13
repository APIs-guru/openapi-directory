from dataclasses import dataclass, field
from typing import Enum

class ResourceTypeEnum(str, Enum):
    EC2_INSTANCE = "Ec2Instance"
    AUTO_SCALING_GROUP = "AutoScalingGroup"
    EBS_VOLUME = "EbsVolume"
    LAMBDA_FUNCTION = "LambdaFunction"

