from dataclasses import dataclass, field
from typing import Enum

class ScalableDimensionEnum(str, Enum):
    AUTOSCALING_AUTO_SCALING_GROUP_DESIRED_CAPACITY = "autoscaling:autoScalingGroup:DesiredCapacity"
    ECS_SERVICE_DESIRED_COUNT = "ecs:service:DesiredCount"
    EC2_SPOT_FLEET_REQUEST_TARGET_CAPACITY = "ec2:spot-fleet-request:TargetCapacity"
    RDS_CLUSTER_READ_REPLICA_COUNT = "rds:cluster:ReadReplicaCount"
    DYNAMODB_TABLE_READ_CAPACITY_UNITS = "dynamodb:table:ReadCapacityUnits"
    DYNAMODB_TABLE_WRITE_CAPACITY_UNITS = "dynamodb:table:WriteCapacityUnits"
    DYNAMODB_INDEX_READ_CAPACITY_UNITS = "dynamodb:index:ReadCapacityUnits"
    DYNAMODB_INDEX_WRITE_CAPACITY_UNITS = "dynamodb:index:WriteCapacityUnits"

