from dataclasses import dataclass, field
from typing import Enum

class ServiceNamespaceEnum(str, Enum):
    AUTOSCALING = "autoscaling"
    ECS = "ecs"
    EC2 = "ec2"
    RDS = "rds"
    DYNAMODB = "dynamodb"

