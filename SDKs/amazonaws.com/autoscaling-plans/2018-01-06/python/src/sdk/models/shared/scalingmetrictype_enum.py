from dataclasses import dataclass, field
from typing import Enum

class ScalingMetricTypeEnum(str, Enum):
    ASG_AVERAGE_CPU_UTILIZATION = "ASGAverageCPUUtilization"
    ASG_AVERAGE_NETWORK_IN = "ASGAverageNetworkIn"
    ASG_AVERAGE_NETWORK_OUT = "ASGAverageNetworkOut"
    DYNAMO_DB_READ_CAPACITY_UTILIZATION = "DynamoDBReadCapacityUtilization"
    DYNAMO_DB_WRITE_CAPACITY_UTILIZATION = "DynamoDBWriteCapacityUtilization"
    ECS_SERVICE_AVERAGE_CPU_UTILIZATION = "ECSServiceAverageCPUUtilization"
    ECS_SERVICE_AVERAGE_MEMORY_UTILIZATION = "ECSServiceAverageMemoryUtilization"
    ALB_REQUEST_COUNT_PER_TARGET = "ALBRequestCountPerTarget"
    RDS_READER_AVERAGE_CPU_UTILIZATION = "RDSReaderAverageCPUUtilization"
    RDS_READER_AVERAGE_DATABASE_CONNECTIONS = "RDSReaderAverageDatabaseConnections"
    EC2_SPOT_FLEET_REQUEST_AVERAGE_CPU_UTILIZATION = "EC2SpotFleetRequestAverageCPUUtilization"
    EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_IN = "EC2SpotFleetRequestAverageNetworkIn"
    EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_OUT = "EC2SpotFleetRequestAverageNetworkOut"

