from dataclasses import dataclass, field
from typing import Enum

class ServiceNamespaceEnum(str, Enum):
    ECS = "ecs"
    ELASTICMAPREDUCE = "elasticmapreduce"
    EC2 = "ec2"
    APPSTREAM = "appstream"
    DYNAMODB = "dynamodb"
    RDS = "rds"
    SAGEMAKER = "sagemaker"
    CUSTOM_RESOURCE = "custom-resource"
    COMPREHEND = "comprehend"
    LAMBDA = "lambda"
    CASSANDRA = "cassandra"
    KAFKA = "kafka"
    ELASTICACHE = "elasticache"

